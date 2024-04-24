const mongoose = require('mongoose')
const DS = new mongoose.Schema ({
    Producto: String,
    Precio:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('DS24', DS)