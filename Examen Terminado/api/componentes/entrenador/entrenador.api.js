'use strict';

const entrenadorModel = require ('./entrenador.model');

module.exports.registrar_entrenador= function(req, res){
    let nuevoEntrenador = new entrenadorModel({
        nombre : req.body.nombre,
        numero : req.body.numero,
        edad : req.body.edad,
        sexo : req.body.sexo,
        foto : req.body.foto
    });

    nuevoEntrenador.save(function(error){
        if(error){
            console.debug(error);
            res.json({
                success : false,
                msj : 'El entrenador no pudo ser registrado : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : 'El entrenador ha sido registrado correctamente' 
            });
        }
    });

};

module.exports.listar_entrenador = function(req, res){
    entrenadorModel.find().then(
        function(entrenador){
            res.send(entrenador);
        }
    );
};