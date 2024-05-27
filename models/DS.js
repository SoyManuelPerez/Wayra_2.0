
const mongoose = require('mongoose')
const DS = new mongoose.Schema ({
    DS: String,
    Comanda: String,
    Nombre:String,
    Adultos: Number,
    Niños: Number,
    Bebes: Number,
    Ingreso: String, 
})
module.exports = mongoose.model('Dia_Sol', DS)