
function obtenerCaptura(){
    let listaCapturas = [];

    
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/listar_captura',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async:false,
        data:{
        }
      });
    
      peticion.done(function(response){
       listaCapturas = response;
      });
    
      peticion.fail(function(){
       
      });

 

    return listaCapturas;
};
