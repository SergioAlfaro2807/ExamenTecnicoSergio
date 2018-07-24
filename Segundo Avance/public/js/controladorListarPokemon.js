'use strict'


mostrarPokemon();
let inputBuscar = document.querySelector('#txtBuscar');


inputBuscar.addEventListener('keyup' , function(){
    mostrarPokemon(inputBuscar.value)


});

function mostrarPokemon(pBuscar){

    
   
    let listaPokemon = obtenerPokemon();
    let tbody = document.querySelector('#tblEntrenador tbody');
    if(!pBuscar){
        pBuscar = '';
    }
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemon .length; i++){
      
        if(listaPokemon[i]['nombre'].toLowerCase().includes(pBuscar.toLowerCase()) || listaPokemon[i]['tipo1'].toLowerCase().includes(pBuscar.toLowerCase()) || listaPokemon[i]['tipo2'].toLowerCase().includes(pBuscar.toLowerCase())){
        let fila = tbody.insertRow();
        let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaNumero = fila.insertCell();
        let celdaTipo1 = fila.insertCell();
        let celdaTipo2 = fila.insertCell();

        let imagen = document.createElement('img');
        imagen.src = listaPokemon [i]['foto'];
        imagen.classList.add('imageSettings');


        celdaFoto.appendChild(imagen);
  


        
        
       
        celdaNombre.innerHTML =  listaPokemon[i]['nombre'];
        celdaNumero.innerHTML =  listaPokemon[i]['numero'];
        celdaTipo1.innerHTML =  listaPokemon[i]['tipo1'];
        celdaTipo2.innerHTML =  listaPokemon[i]['tipo2'];
   

   }

   

   
   }
};