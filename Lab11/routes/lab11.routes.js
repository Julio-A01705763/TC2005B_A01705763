const express = require('express');

const router = express.Router();

router.get('/ruta1', (request, response, next) => {
    
    let html = `
        <h2>Ruta para guardar nombres en un txt</h2>
        <form action="ruta1" method="POST">
        <label for="usuario">Nombre del usuario:</label>
        <input type="text" id="usuario" name="usuario">
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

router.post('/ruta1', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.usuario);
    response.send("Hola usuario " + request.body.usuario);
    const filesystem = require('fs');
  
    filesystem.writeFileSync('Lab11Nombres.txt', 'Hi '+request.body.usuario);
});

router.get('/ruta2', (request, response, next) => {
    
    let html = `
        <h2>Pregunta Lab 11</h2>
        <strong>Describe el archivo package.json.</strong>
        <p>Descrito</p>
    `;
    response.send(html);
});

router.get('/', (request, response, next) => {
    
    let html = `
        <h2>Hola, bienvenido a el Lab 11</h2>
        <h3>Puedes navegar usando las sigueintes rutas</h3>
        <ul>
            <li>/lab/</li>
            <li>/lab/ruta1</li>
            <li>/lab/ruta2</li>
            <li>/starwars/OrdenJedi</li>
            <li>/starwars/OrdenSith</li>
        </ul>
    `;
    response.send(html);
});

module.exports = router;