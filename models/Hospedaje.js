const mongoose = require('mongoose')
const Huesped = new mongoose.Schema ({
    HB: String,
    Nombre:String,
    Adultos: Number,
    Niños: Number,
    Bebes: Number,
    Ingreso: String, 
    Salida: String
})
module.exports = mongoose.model('Hospedaje', Huesped)