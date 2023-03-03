const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Agrega /lab para ver las diferetes rutas');
    next();
});

const lab11Rutas = require('./routes/lab11.routes');
app.use('/lab', lab11Rutas);

const starwarsRoutes = require('./routes/starwars.routes');
app.use('/starwars', starwarsRoutes);

app.use((request, response, next) => {
    console.log('Middleware Error 404');

    response.status(404);
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe, usa /lab para ver las rutas');
});

app.listen(3000);