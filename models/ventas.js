const mongoose = require('mongoose')
const venta = new mongoose.Schema ({
    Mesero:String,
    Producto: String,
    Precio:Number,
    Cantidad:Number,  
    Tipo: String,
    Fecha: String, 
})
module.exports = mongoose.model('Ventas', venta)