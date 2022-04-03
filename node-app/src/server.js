const path = require('path');
const  express = require('express');
const exp = require('constants');


//Initializations
const app = express();

//Settings
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname, 'views'));


//Middlewares
app.use(express.urlencoded({extended:false}));//este es para que cualquier data que se registre por medio de un formulario sea json

//Global Variables


//Routes
app.get('/',(req,res,next) => {
    res.send('hello world');
})


//Static Files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;