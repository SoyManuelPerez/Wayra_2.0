const Bar = require('../models/Bar')
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
const CB14 = require('../models/CB-14')
const CB15 = require('../models/CB-15')
const CB16 = require('../models/CB-16')
const CB17 = require('../models/CB-17')
const CB18 = require('../models/CB-18')
const CB19 = require('../models/CB-19')
const CB20 = require('../models/CB-20')
const CB21 = require('../models/CB-21')
const CB22 = require('../models/CB-22')
const CB23 = require('../models/CB-23')
const CB24 = require('../models/CB-24')
const CB25 = require('../models/CB-25')
// dia de sol
const DS1 = require('../models/DS-1')
const DS2 = require('../models/DS-2')
const DS3 = require('../models/DS-3')
const DS4 = require('../models/DS-4')
const DS5 = require('../models/DS-5')
const DS6 = require('../models/DS-6')
const DS7 = require('../models/DS-7')
const DS8 = require('../models/DS-8')
const DS9 = require('../models/DS-9')
const DS10 = require('../models/DS-10')
const DS11 = require('../models/DS-11')
const DS12 = require('../models/DS-12')
const DS13 = require('../models/DS-13')
const DS14 = require('../models/DS-14')
const DS15 = require('../models/DS-15')
const DS16 = require('../models/DS-16')
const DS17 = require('../models/DS-17')
const DS18 = require('../models/DS-18')
const DS19 = require('../models/DS-19')
const DS20 = require('../models/DS-20')
const DS21 = require('../models/DS-21')
const DS22 = require('../models/DS-22')
const DS23 = require('../models/DS-23')
const DS24 = require('../models/DS-24')
const DS25 = require('../models/DS-25')
const DS26 = require('../models/DS-26')
const DS27 = require('../models/DS-27')
const DS28 = require('../models/DS-28')
const DS29 = require('../models/DS-29')
const DS30 = require('../models/DS-30')

//Mostrar productos
module.exports.mostrar = (req, res) => {
    Bar.find({})
        .then(Bar => res.render('bar', { bar: Bar }))
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Elinar
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    Bar.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/Bar')       
}
//Cuenta Correspondiente
module.exports.HB1 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        // Eliminar el documento de la colección Bar
        await Bar.findByIdAndDelete(id);
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }    
};
module.exports.HB2 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB2({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB3 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB3({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB4 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB4({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB5 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB5({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB6 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB6({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB7 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB7({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB8 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB8({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB9 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB9({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB10 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB10({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB11 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB11({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB12 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB12({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB13 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new HB13({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
//Cabañas
module.exports.CB14 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB14({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB15 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB15({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB16 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB16({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB17 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB17({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB18 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB18({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB19 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB19({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB20 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB20({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB21 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB21({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB22 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB22({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB23 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora
        const newUuario = new CB23({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB24 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB24({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB25 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new CB25({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};


//Dias de sol
module.exports.DS1 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS1({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS2 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS2({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS3 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS3({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS4 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS4({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS5 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS5({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS6 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS6({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS7 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS7({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS8 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS8({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS9 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS9({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS10 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS10({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS11 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS11({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS12 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS12({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS13 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS13({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS14 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS14({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS15 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS15({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS16 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS16({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS17 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS17({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS18 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS18({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS19 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS19({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS20 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS20({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS21 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS21({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS22 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS22({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS23 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS23({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS24 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS24({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS25 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS25({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS26 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS26({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS27 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS27({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS28 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS28({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS29 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS29({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS30 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Bar.findById(id).lean().exec();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = producto.Usuario;
        const Hora =producto.Hora
        const newUuario = new DS30({ Producto, Precio, Usuario, Tipo, Hora });
        await newUuario.save();
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en 1
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -1 } });
        }
        await Bar.findByIdAndDelete(id).lean().exec();
        res.redirect('/Bar');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};