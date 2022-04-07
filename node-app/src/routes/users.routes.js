const { Router } = require('express');
const router = Router();

const {signin, 
    signup, 
    logout, 
    renderSigninForm, 
    renderSignupForm} = require('../controllers/users.controller')

//Registro
router.get('/users/signup', renderSignupForm);
router.post('/users/signup', signup);

//Inicio de sesion
router.get('/users/signin', renderSigninForm);
router.post('/users/signin', signin);

//Log out
router.post('/users/logout', logout);

module.exports = router;