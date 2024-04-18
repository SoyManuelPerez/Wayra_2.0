const mongoose = require('mongoose')
const Bar = new mongoose.Schema ({
    Mesa: String,
    Producto: String,
    Precio:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('Bar', Bar)