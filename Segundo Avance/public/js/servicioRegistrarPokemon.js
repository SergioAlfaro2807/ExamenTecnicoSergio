'use strict';
function  registrarPokemon(sNombre, sNumero, sPrimerTipo, sSegundoTipo, imagenUrl){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            nombre : sNombre,
            numero : sNumero,
            tipo1: sPrimerTipo,
            tipo2: sSegundoTipo,
            foto:  imagenUrl
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
};
