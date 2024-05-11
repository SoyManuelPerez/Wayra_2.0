
const mongoose = require('mongoose')
const DS = new mongoose.Schema ({
    DS: String,
    Comanda: String,
    Nombres:String,
    Apellidos:String,
    Tipo:String,
    Documento:String,
    Adultos: Number,
    Niños: Number,
    Bebes: Number,
    Abono: String,
    Final: String,
    Ingreso: String, 
})
module.exports = mongoose.model('Dia_Sol', DS)