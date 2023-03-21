const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    
    let html = `
        <form action="/hockey/nuevo" method="POST">
        <label for="jugador">Nombre del jugador de hockey:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    response.send("El jugador de hockey se llama: " + request.body.jugador);
});

module.exports = router;