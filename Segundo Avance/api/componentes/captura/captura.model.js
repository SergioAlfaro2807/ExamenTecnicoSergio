'use strict';
let mongoose = require('mongoose');

let capturarSchema = new mongoose.Schema({
   
    entrenador: { type : String, required : true},
    pokemoncapturado : {type : String, required : true}
    
    
    
});

module.exports = mongoose.model('Capturar', capturarSchema);