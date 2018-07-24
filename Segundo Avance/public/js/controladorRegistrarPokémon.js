'use strict';

let inputNombrePokemon = document.querySelector('#txtNombrePokemon');
let inputNumeroPokedex = document.querySelector('#txtNumeroPokedex');
let inputPrimerTipo= document.querySelector('#txtTipo1');
let inputSegundoTipo = document.querySelector('#txtTipo2');

let botonRegistrarPokemon = document.querySelector('#btnRegistrarPokemon');
botonRegistrarPokemon.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    let bError = false;


    let sNombre = inputNombrePokemon.value;
    let sNumero = inputNumeroPokedex.value;
    let sPrimerTipo = inputPrimerTipo.value;
    let sSegundoTipo = inputSegundoTipo.value;


    bError = validar();

    if (bError == true) {


        swal({
            title: 'Datos Incorrectos',
            text: 'No se pudo registrar el Pokémon, por favor revise los espacios en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });

    } else {

        swal({
            title: 'Datos Correctos',
            text: 'El Pokémon se ha registrado correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        limpiarFormulario();
        registrarPokemon(sNombre, sNumero, sPrimerTipo, sSegundoTipo, imagenUrl);
        setTimeout(() => {
            window.location.href = 'listaPokémon.html';
        }, 2000);

    }
};


function validar() {

    let bError = false;


    let sNombre = inputNombrePokemon.value;
    let sNumero = inputNumeroPokedex.value;
    let sPrimerTipo = inputPrimerTipo.value;



    let regexGenerico = /^[a-zA-Z0-9]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación del Nombre del entrenador
    if (sNombre == '' || (regexGenerico.test(sNombre) == false)) {
        inputNombrePokemon.classList.add('errorInput');
        bError = true;
    } else {
        inputNombrePokemon.classList.remove('errorInput');

    }
    //Validación del Número del Entrenador
    if (sNumero == '' || (regexSoloNumeros.test(sNumero) == false)) {
        inputNumeroPokedex.classList.add('errorInput');
        bError = true;
    } else {
        inputNumeroPokedex.classList.remove('errorInput');

    }



    if (sPrimerTipo == '') {
        inputPrimerTipo.classList.add('errorInput');
        bError = true;
    } else {
        inputPrimerTipo.classList.remove('errorInput');
        
    }
    return bError;

}


function limpiarFormulario() {
    inputNombrePokemon = '';
    inputNumeroPokedex = '';
    inputPrimerTipo = '';
    inputSegundoTipo = '';


}













