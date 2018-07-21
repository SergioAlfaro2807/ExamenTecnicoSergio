'use strict';
const express = require('express');
const router = express.Router();
const entrenadorApi = require('./entrenador.api');

router.route('/registrar_entrenador')
    .post(function(req, res){
    	console.debug('registrar entrenador: ' + req);
        entrenadorApi.registrar_entrenador(req, res);
});

router.route('/listar_entrenador')
    .get(function(req, res){
        entrenadorApi.listar_entrenador(req, res);
    });


module.exports = router;

