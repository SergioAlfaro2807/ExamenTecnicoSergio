'use strict';

let inputNombreEntrenador = document.querySelector('#txtNombreEntrenador');
let inputNumeroEntrenador = document.querySelector('#txtNumeroEntrenador');
let inputEdad = document.querySelector('#txtEdadEntrenador');
let inputSexo = document.querySelector('#Sexo');

let botonRegistrarEntrenador = document.querySelector('#btnRegistrarEntrenador');
botonRegistrarEntrenador.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    let bError = false;


    let sNombre = inputNombreEntrenador.value;
    let sNumero = inputNumeroEntrenador.value;
    let sEdad = inputEdad.value;
    let sSexo = inputSexo.value;


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
        registrarEntrenado(sNombre, sNumero, sEdad, sSexo, imagenUrl);
        limpiarFormulario();
       
    }
};


function validar() {

    let bError = false;


    let sNombre = inputNombreEntrenador.value;
    let sNumero = inputNumeroEntrenador.value;
    let sEdad = inputEdad.value;
    let sSexo = inputSexo.value;

    let regexLetras = /^[a-zA-Z]+$/;
    let regexSoloNumeros = /^[0-9]+$/;

    //Validación del Nombre del entrenador
    if (sNombre == '' || (regexLetras.test(sNombre) == false)) {
        inputNombreEntrenador.classList.add('errorInput');
        bError = true;
    } else {
        inputNombreEntrenador.classList.remove('errorInput');
        
    }
    //Validación del Número del Entrenador
    if (sNumero == '' || (regexSoloNumeros.test(sNumero) == false)) {
        inputNumeroEntrenador.classList.add('errorInput');
        bError = true;
    } else {
        inputNumeroEntrenador.classList.remove('errorInput');
       
    }




    //Validación de la edad del Entrenador
    if (sEdad == '' || sEdad < 15 || sEdad > 18 || (regexSoloNumeros.test(sEdad) == false)) {
        inputEdad.classList.add('errorInput');
        bError = true;
    } else {
        inputEdad.classList.remove('errorInput');
       
    }

    //Validación del sexo del entrenador 
    if (sSexo == '') {
        inputSexo.classList.add('errorInput');
        bError = true;
    } else {
        inputSexo.classList.remove('errorInput');
        
    }

    return bError;

}


function limpiarFormulario() {
    inputNombreEntrenador = '';
    inputNumeroEntrenador = '';
    inputEdad = '';
    inputSexo = '';


}













