const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User')

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            // Checar si el email del usuario existe
            const user = await User.findOne({ email });

            if (!user) {
                return done(null, false, { message: 'Not User found.' });
            } else {
                // revisar que la contraseña sea la correcta 
                const match = await user.matchPassword(password);
                if (match) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: "Incorrect Password." });
                }
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});