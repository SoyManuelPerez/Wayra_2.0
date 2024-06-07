const mongoose = require('mongoose')
const DS = new mongoose.Schema ({
    Producto: String,
    Precio:Number,
    Cantidad:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('DS49', DS)