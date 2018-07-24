'use strict';

const capturarModel = require ('./captura.model');

module.exports.registrar_captura= function(req, res){
    let nuevaCaptura = new capturarModel({
        entrenador : req.body.entrenador,
        pokemoncapturado : req.body.pokemoncapturado
        
    });

    nuevaCaptura.save(function(error){
        if(error){
            console.debug(error);
            res.json({
                success : false,
                msj : 'La captura no pudo ser realizada : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : 'La captura ha sido exitosa' 
            });
        }
    });

};

module.exports.listar_captura = function(req, res){
    capturarModel.find().then(
        function(capturar){
            res.send(capturar);
        }
    );
};