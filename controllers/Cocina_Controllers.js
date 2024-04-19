const Cocina = require('../models/Cocina')
const Productos = require('../models/Producto')
const HB = require('../models/HB-1')
const HB2 = require('../models/HB-2')
const HB3 = require('../models/HB-3')
const HB4 = require('../models/HB-4')
const HB5 = require('../models/HB-5')
const HB6 = require('../models/HB-6')
const HB7 = require('../models/HB-7')
const HB8 = require('../models/HB-8')
const HB9 = require('../models/HB-9')
const HB10 = require('../models/HB-10')
const HB11 = require('../models/HB-11')
const HB12 = require('../models/HB-12')
const HB13 = require('../models/HB-13')
//Mostrar productos
module.exports.mostrar = (req, res) => {
    Cocina.find({})
        .then(Cocina => res.render('Cocina', { Cocina: Cocina }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Elinar
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    Cocina.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/Cocina')       
}
//Cuenta Correspondiente
module.exports.HB1 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora = producto.Hora;
        // Crear un nuevo documento en la colección HB
        const newUsuario = new HB({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }    
};
module.exports.HB2 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB2({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB3 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB3({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB4 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB4({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB5 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB5({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB6 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB6({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB7 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB7({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB8 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB8({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB9 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB9({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB10 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB10({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB11 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB11({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB12 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUsuario = new HB12({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB13 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora =producto.Hora
        const newUuario = new HB13({ Producto, Precio, Usuario, Tipo, Hora });
        await newUsuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Cocina.findByIdAndDelete(id).lean().exec();
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};

