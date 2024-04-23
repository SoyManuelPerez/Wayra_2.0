
const mongoose = require('mongoose')
const DS = new mongoose.Schema ({
    DS: String,
    Comanda: String,
    Nombres:String,
    Apellidos:String,
    Tipo:String,
    Documento:String,
    Abono: Number,
    Final: Number,
    Ingreso: String, 
})
module.exports = mongoose.model('Dia_Sol', DS)