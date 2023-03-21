const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');

const juegosController = require('../controllers/juegos.controller');

router.get('s/nuevo', hasCreate, juegosController.get_nuevo);

router.post('s/nuevo', hasCreate, juegosController.post_nuevo);

router.get('/:id', juegosController.listar);

router.get('/', juegosController.listar);

module.exports = router;