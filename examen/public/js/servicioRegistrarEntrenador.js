'use strict';
function  registrarEntrenado(sNombre, sNumero, sEdad, sSexo, imagenUrl){
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
            nombre : sNombre,
            numero : sNumero,
            edad: sEdad,
            sexo: sSexo,
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
