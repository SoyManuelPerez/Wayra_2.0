const mongoose = require('mongoose')
const HB = new mongoose.Schema ({
    Producto: String,
    Precio:Number,
    Cantidad:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('HB13', HB)