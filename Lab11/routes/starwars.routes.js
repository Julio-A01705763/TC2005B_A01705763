const express = require('express');

const router = express.Router();

router.get('/OrdenJedi', (request, response, next) => {
    
    let html = `
        <h2>Orden Jedi</h2>
        <p>Era una noble religiosa orden de protectores unidos en su devoción al lado luminoso de la Fuerza. Con una historia registrada a miles de años antes del alzamiento del Imperio Galáctico, los Caballeros Jedi (destacados por sus sables de luz y habilidad natural de aprovechar los poderes de la Fuerza) colocados como guardianes de la paz y la justicia en la República Galáctica. </p>
    `;
    response.send(html);
});


router.get('/OrdenSith', (request, response, next) => {
    
    let html = `
        <h2>Orden Sith</h2>
        <p>fue una antigua orden de portadores de la Fuerza dedicados al lado oscuro de la Fuerza. Emergiendo como una facción divergente de la Orden Jedi, los Sith se convirtieron en los enemigos mortales de los Jedi y lucharon contra ellos en numerosas guerras. Conducidos por emociones como odio, ira y avaricia, los Sith eran engañosos y estaban fuertemente obsesionados con adquirir poder sin importar el costo. </p>
    `;
    response.send(html);
});

module.exports = router;