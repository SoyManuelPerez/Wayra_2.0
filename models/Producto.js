const mongoose = require('mongoose')
const Producto = new mongoose.Schema ({
    Producto: String,
    Precio:Number,
    Cantidad: Number,
    Tipo: String, 
})
module.exports = mongoose.model('Productos', Producto)