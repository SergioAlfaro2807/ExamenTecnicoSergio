
function obtenerEntrenadores(){
    let listaEntrenador = [];

    
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_entrenador',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
       listaEntrenador = response;
      });
    
      peticion.fail(function(){
       
      });

 

    return listaEntrenador;
};
