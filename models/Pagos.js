const mongoose = require('mongoose')
const Pagos = new mongoose.Schema ({
    Cuenta: String,
    Tipo:String,
    Monto: Number,
    Tipoextra:String,
    Montoextra: Number,
    Fecha: String, 
})
module.exports = mongoose.model('Pagos', Pagos)