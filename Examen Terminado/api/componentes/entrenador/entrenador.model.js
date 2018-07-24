'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
   
    nombre: { type : String, required : true},
    numero: {type : Number, unique : true, required : true},
    edad: {type : Number, required : true},
    sexo: {type: String, required: true},
    foto : {type: String}
    
    
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);