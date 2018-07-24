'use strict';

const pokemonModel = require ('./pokemon.model');

module.exports.registrar_pokemon= function(req, res){
    let nuevoPokemon = new pokemonModel({
        nombre : req.body.nombre,
        numero : req.body.numero,
        tipo1 : req.body.tipo1,
        tipo2 : req.body.tipo2,
        foto : req.body.foto
    });

    nuevoPokemon.save(function(error){
        if(error){
            console.debug(error);
            res.json({
                success : false,
                msj : 'El Pokémon no pudo ser registrado : ' + error
            });
        }else{
            res.json({
                success : true,
                msj : 'El Pokémon ha sido registrado correctamente' 
            });
        }
    });

};

module.exports.listar_pokemon = function(req, res){
    pokemonModel.find().then(
        function(pokemon){
            res.send(pokemon);
        }
    );
};