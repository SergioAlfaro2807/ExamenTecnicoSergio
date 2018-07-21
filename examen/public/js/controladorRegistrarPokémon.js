'use strict';

let inputNombrePokemon = document.querySelector('#txtNombrePokemon');
let inputNumeroPokedex = document.querySelector('#txtNumeroPokedex');
let sltTipo1 = document.querySelector('#txtTipo1');
let sltTipo2 = document.querySelector('#txtTipo2');

let botonRegistrarPokemon = document.querySelector('#btnRegistrarPokemon');
botonRegistrarPokemon.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    let bError = false;


    let sNombre = inputNombrePokemon.value;
    let sNumero = inputNumeroPokedex.value;
    let sTipo1 = sltTipo1.value;
    let sTipo2 = sltTipo2.value;


    bError = validar();

    if (bError == true) {


        swal({
            title: 'Datos Incorrectos',
            text: 'No se pudo registrar el entrenador, por favor revise los espacios en rojo',
            type: 'warning',
            confirmButtonText: 'Entendido'
        });

    } else {

        swal({
            title: 'Datos Correctos',
            text: 'El entrenador se ha registrado correctamente',
            type: 'success',
            confirmButtonText: 'Entendido'
        });
        registrarPokemon(sNombre, sNumero, sTipo1, sTipo2, imagenUrl);
        limpiarFormulario();
       
    }
};


function validar() {

    let bError = false;


    let sNombre =  inputNombrePokemon.value;
    let sNumero = inputNumeroPokedex.value;
    let sTipo1 = sltTipo1.value;
    let sTipo2 = sltTipo2.value;

    let regexLetras = /^[a-zA-Z]+$/;
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




    //Validación de la edad del Entrenador
    if (sTipo1 == '') {
        sltTipo1.classList.add('errorInput');
        bError = true;
    } else {
        sltTipo1.classList.remove('errorInput');
       
    }

    //Validación del sexo del entrenador 
    if (sTipo2 == '') {
        sltTipo2.classList.add('errorInput');
        bError = true;
    } else {
        sltTipo2.classList.remove('errorInput');
        
    }

    return bError;

}


function limpiarFormulario() {
    inputNombreEntrenador = '';
    inputNumeroEntrenador = '';
    inputEdad = '';
    inputSexo = '';


}













