const mongoose = require('mongoose')
const HB = new mongoose.Schema ({
    Producto: String,
    Precio:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('CB16', HB)