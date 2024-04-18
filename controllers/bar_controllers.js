const Bar = require('../models/Bar')
const HB = require('../models/HB-1')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    Bar.find({})
        .then(Bar => res.render('bar', { bar: Bar }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Cuenta Correspondiente
module.exports.Crear = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
