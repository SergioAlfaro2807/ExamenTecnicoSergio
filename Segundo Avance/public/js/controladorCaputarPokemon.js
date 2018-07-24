'use strict';

let sltEntrenador = document.querySelector('#sltNombre');
let sltPokemon = document.querySelector('#sltPokemon');

let botonCapturarPokemon = document.querySelector('#btnCapturarPokemon');
botonCapturarPokemon .addEventListener('click', obtenerDatos);
Entrenadores();
Pokemon();
function obtenerDatos() {
    let bError = false;


    let sEntrenador = sltEntrenador.value;
    let sPokemon = sltPokemon.value;



    bError = validar();

    if (bError == true) {


        swal({
            title: 'Datos Incorrectos',
            text: 'No se realzar la captura, por favor revise los espacios en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });

    } else {

        swal({
            title: 'Datos Correctos',
            text: 'La captura ha sido exitosa',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        registrarCapturaPokemon(sEntrenador, sPokemon);
        setTimeout(() => {
            window.location.href = 'listaCaptura.html';
        }, 2000);
       
    }
};


function validar() {

    let bError = false;


    let sEntrenador = sltEntrenador.value;
    let sPokemon =  sltPokemon .value;



    if (sEntrenador== '') {
        sltEntrenador.classList.add('errorInput');
        bError = true;
    } else {
        sltEntrenador.classList.remove('errorInput');
        
    }


    if (sPokemon  == '') {
        sltPokemon.classList.add('errorInput');
        bError = true;
    } else {
        sltPokemon.classList.remove('errorInput');
        
    }
    return bError;

}


function Entrenadores(){
    let asociarEntrenador = obtenerEntrenadores();
    for(let i = 0; i < asociarEntrenador.length; i++){
       
        let opcion = new Option(asociarEntrenador[i]['nombre'])
        opcion.value = asociarEntrenador[i]['nombre']
        sltEntrenador.options.add(opcion);
        

        }
}


function Pokemon(){
    let asociarPokemon = obtenerPokemon();
    for(let i = 0; i < asociarPokemon.length; i++){
       
        let opcion = new Option(asociarPokemon[i]['nombre'])
        opcion.value = asociarPokemon[i]['nombre']
        sltPokemon.options.add(opcion);
        

        }
}










