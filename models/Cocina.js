const mongoose = require('mongoose')
const Cocina = new mongoose.Schema ({
    Mesa: String,
    Comanda: String,
    Producto: String,
    Cantidad:Number,
    Precio:Number,
    Usuario: String,
    Tipo: String,
    Hora: String, 
})
module.exports = mongoose.model('Cocina', Cocina)