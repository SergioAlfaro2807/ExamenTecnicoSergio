'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
   
    nombre: { type : String, unique: true, required : true},
    numero: {type : Number, unique : true, required : true},
    tipo1: {type : String, required : true},
    tipo2: {type: String},
    foto : {type: String}
    
    
});

module.exports = mongoose.model('Pokemon', pokemonSchema);