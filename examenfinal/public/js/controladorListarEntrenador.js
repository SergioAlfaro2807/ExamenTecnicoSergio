'use strict'


mostrarEntrenadores();
let inputBuscar = document.querySelector('#txtBuscar');


inputBuscar.addEventListener('keyup' , function(){
    mostrarEntrenadores(inputBuscar.value)


});

function mostrarEntrenadores(pBuscar){

    
   
    let listaEntrenadores = obtenerEntrenadores();
    let tbody = document.querySelector('#tblEntrenador tbody');
    if(!pBuscar){
        pBuscar = '';
    }
    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenadores.length; i++){
        if(listaEntrenadores[i]['nombre'].toLowerCase().includes(pBuscar.toLowerCase())){
        let fila = tbody.insertRow();
        let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaNumero = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaSexo = fila.insertCell();

        let imagen = document.createElement('img');
        imagen.src = listaEntrenadores[i]['foto'];
        imagen.classList.add('imageSettings');


        celdaFoto.appendChild(imagen);
  


        
        
       
        celdaNombre.innerHTML = listaEntrenadores[i]['nombre'];
        celdaNumero.innerHTML = listaEntrenadores[i]['numero'];
        celdaEdad.innerHTML = listaEntrenadores[i]['edad'];
        celdaSexo.innerHTML = listaEntrenadores[i]['sexo'];
   

   }

   }
};