const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is-auth');

const app = express();

app.use(session({
        secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
        resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
        saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//CSRF Protection
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta /hola');
});

const rutasUsuarios = require('./routes/usuarios.routes');

app.use('/usuarios', rutasUsuarios);

const rutasJuegos = require('./routes/juegos.routes');

app.use('/juegos', isAuth, rutasJuegos);

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

const soccerRutas = require('./routes/soccer.routes');

app.use('/soccer', soccerRutas);

const yoRutas = require('./routes/yo.routes');

app.use('/yo', yoRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);