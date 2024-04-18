const mongoose = require('mongoose')
const venta = new mongoose.Schema ({
    Producto: String,
    Precio:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('Ventas', venta)