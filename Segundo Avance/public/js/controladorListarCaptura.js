'use strict'


mostrarCapturas();
let inputBuscar = document.querySelector('#txtBuscar');


inputBuscar.addEventListener('keyup' , function(){
    mostrarCapturas(inputBuscar.value)


});

function mostrarCapturas(pBuscar){

    
   
    let listaCapturas = obtenerCaptura();
    let tbody = document.querySelector('#tblCapturas tbody');
    if(!pBuscar){
        pBuscar = '';
    }
    tbody.innerHTML = '';

    for(let i = 0; i < listaCapturas.length; i++){
        if(listaCapturas[i]['entrenador'].toLowerCase().includes(pBuscar.toLowerCase()) || listaCapturas[i]['pokemoncapturado'].toLowerCase().includes(pBuscar.toLowerCase()) ){
        let fila = tbody.insertRow();
        let celdaNombre = fila.insertCell();
        let celdaPokemon = fila.insertCell();
        
        
       
        celdaNombre.innerHTML = listaCapturas[i]['entrenador'];
        celdaPokemon.innerHTML = listaCapturas[i]['pokemoncapturado'];
      
   

   }

   }
};