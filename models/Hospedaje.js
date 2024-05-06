const mongoose = require('mongoose')
const Huesped = new mongoose.Schema ({
    HB: String,
    Nombres:String,
    Apellidos:String,
    Tipo:String,
    Documento:String,
    Celular:String,
    Correo:String,
    Adultos: Number,
    Niños: Number,
    Bebes: Number,
    Abono: Number,
    Final: Number,
    Ingreso: String, 
    Salida: String
})
module.exports = mongoose.model('Hospedaje', Huesped)