'use strict';
const express = require('express');
const router = express.Router();
const capturaApi = require('./captura.api');

router.route('/registrar_captura')
    .post(function(req, res){
    	console.debug('registrar captura: ' + req);
        capturaApi.registrar_captura(req, res);
});

router.route('/listar_captura')
    .get(function(req, res){
        capturaApi.listar_captura(req, res);
    });


module.exports = router;

