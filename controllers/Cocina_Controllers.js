const Cocina = require('../models/Cocina')
const Huesped = require('../models/Hospedaje')
const Productos = require('../models/Producto')
const comicion = require('../models/Comision')
const DS = require('../models/DS')
//Habitaciones
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
const HB14 = require('../models/HB-14')
const HB15 = require('../models/HB-15')
const CB20 = require('../models/CB-20')
const CB21 = require('../models/CB-21')
const CB22 = require('../models/CB-22')
const CB23 = require('../models/CB-23')
const CB24 = require('../models/CB-24')
const CB25 = require('../models/CB-25')
const CB26 = require('../models/CB-26')
const CB27 = require('../models/CB-27')
const CB28 = require('../models/CB-28')
const CB29 = require('../models/CB-29')
const CB30 = require('../models/CB-30')
const CB31 = require('../models/CB-31')
//Habitaciones
const EHB = require('../models/EHB-1')
const EHB2 = require('../models/EHB-2')
const EHB3 = require('../models/EHB-3')
const EHB4 = require('../models/EHB-4')
const EHB5 = require('../models/EHB-5')
const EHB6 = require('../models/EHB-6')
const EHB7 = require('../models/EHB-7')
const EHB8 = require('../models/EHB-8')
const EHB9 = require('../models/EHB-9')
const EHB10 = require('../models/EHB-10')
const EHB11 = require('../models/EHB-11')
const EHB12 = require('../models/EHB-12')
const EHB13 = require('../models/EHB-13')
const EHB14 = require('../models/EHB-14')
const EHB15 = require('../models/EHB-15')
const ECB20 = require('../models/ECB-20')
const ECB21 = require('../models/ECB-21')
const ECB22 = require('../models/ECB-22')
const ECB23 = require('../models/ECB-23')
const ECB24 = require('../models/ECB-24')
const ECB25 = require('../models/ECB-25')
const ECB26 = require('../models/ECB-26')
const ECB27 = require('../models/ECB-27')
const ECB28 = require('../models/ECB-28')
const ECB29 = require('../models/ECB-29')
const ECB30 = require('../models/ECB-30')
const ECB31 = require('../models/ECB-31')
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
const DS31 = require('../models/DS-31')
const DS32 = require('../models/DS-32')
const DS33 = require('../models/DS-33')
const DS34 = require('../models/DS-34')
const DS35 = require('../models/DS-35')
const DS36 = require('../models/DS-36')
const DS37 = require('../models/DS-37')
const DS38 = require('../models/DS-38')
const DS39 = require('../models/DS-39')
const DS40 = require('../models/DS-40')
const DS41 = require('../models/DS-41')
const DS42 = require('../models/DS-42')
const DS43 = require('../models/DS-43')
const DS44 = require('../models/DS-44')
const DS45 = require('../models/DS-45')
const DS46 = require('../models/DS-46')
const DS47 = require('../models/DS-47')
const DS48 = require('../models/DS-48')
const DS49 = require('../models/DS-49')
const DS50 = require('../models/DS-50')


//Mostrar productos
module.exports.mostrar = (req, res) => {
    Promise.all([
        Huesped.find({}),
        DS.find({}),
        Cocina.find({})
      ])
      .then(([Huesped, DS, Cocina]) => {
        res.render('Cocina', { Huesped: Huesped, DS: DS, Cocina: Cocina });
      })
        .catch(err => console.log(err, 'Error mostrar producto no encontrado'))
}
//Mostrar productos
module.exports.mostrarCenas = (req, res) => {
    Promise.all([
        Huesped.find({}),
      ])
      .then(([Huesped]) => {
        res.render('cenas', { Huesped: Huesped});
      })
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
///Cuenta Correspondiente
module.exports.HB1 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }

        // Crear un nuevo documento en la colección HB
        const nuevoUsuario = new HB({ Producto, Precio, Cantidad, Usuario, Tipo, Hora });
        await nuevoUsuario.save();

        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad en función de la cantidad tomada
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
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
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB2({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB3 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB3({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB4 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB4({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB5 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB5({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB6 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB6({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB7 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB7({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB8 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB8({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }       
};
module.exports.HB9 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB9({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB10 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB10({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB11 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB11({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB12 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new HB12({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.HB13 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB13({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
}
module.exports.HB14 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB14({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
}
module.exports.HB15 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

        
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección HB
        const newUuario = new HB15({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
}
//Cabañas
module.exports.CB26 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB26({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB27 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;

           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB27({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB28 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB28({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB29 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB29({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB30 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB30({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB31 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB31({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB20 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB20({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB21 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB21({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB22 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB22({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB23 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB23({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB24 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB24({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.CB25 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new CB25({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
//Entrantes
//Cuenta Correspondiente
module.exports.EHB1 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }   
};
module.exports.EHB2 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB2({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB3 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB3({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB4 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB4({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB5 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB5({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB6 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB6({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB7 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB7({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB8 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB8({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB9 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB9({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB10 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB10({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB11 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB11({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB12 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB12({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB13 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB13({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB14 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB14({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.EHB15 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
           
        // Crear o actualizar un documento en la colección comision
        if (Tipo === "Plato") {
            const comisionExistente = await comicion.findOne({ Mesero: Usuario });
            if (comisionExistente) {
                // Si existe, incrementar el valor de Plato
                await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
            } else {
                // Si no existe, crear un nuevo documento con Plato: 1
                const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                await nuevaComision.save();
            }
        }
        // Crear un nuevo documento en la colección
        const newUuario = new EHB15({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
//Cabañas
module.exports.ECB26 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB26({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB27 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB27({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB28 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB28({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB29 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB29({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB30 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB30({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB31 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB31({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB20 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB20({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    } 
};
module.exports.ECB21 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB21({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.ECB22 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB22({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.ECB23 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB23({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.ECB24 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB24({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.ECB25 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new ECB25({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};


//Dias de sol
module.exports.DS1 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS1({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS2 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS2({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS3 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS3({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS4 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS4({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS5 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS5({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS6 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS6({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS7 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS7({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS8 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS8({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS9 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS9({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS10 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS10({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS11 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS11({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS12 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS12({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS13 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS13({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS14 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS14({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS15 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS15({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS16 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS16({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS17 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS17({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS18 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS18({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS19 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS19({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS20 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS20({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS21 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS21({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS22 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS22({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS23 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS23({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS24 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS24({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS25 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS25({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS26 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS26({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS27 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS27({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS28 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS28({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS29 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS29({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS30 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS30({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS31 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS31({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS32 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS32({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS33 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS33({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS34 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS34({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS35 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS35({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS36 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS36({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS37 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS37({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS38 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS38({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS39 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS39({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS40 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS40({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS41 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS41({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS42 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS42({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS43 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS43({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS44 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS44({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS45 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS45({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS46 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS46({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS47 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS47({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS48 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS48({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS49 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS49({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};
module.exports.DS50 = async (req, res) => {
    const id = req.params.id;
    try {
        const producto = await Cocina.findById(id);
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Cantidad = producto.Cantidad;
        const Usuario = producto.Usuario;
        const Hora = producto.Hora;
                // Crear o actualizar un documento en la colección comision
                if (Tipo === "Plato") {
                    const comisionExistente = await comicion.findOne({ Mesero: Usuario });
                    if (comisionExistente) {
                        // Si existe, incrementar el valor de Plato
                        await comicion.updateOne({ Mesero: Usuario }, { $inc: { Plato: 1 } });
                    } else {
                        // Si no existe, crear un nuevo documento con Plato: 1
                        const nuevaComision = new comicion({ Mesero: Usuario, Coctel: 0, Vino: 0, Plato: 1 });
                        await nuevaComision.save();
                    }
                }
        // Crear un nuevo documento en la colección
        const newUuario = new DS0({ Producto, Precio,Cantidad, Usuario, Tipo, Hora });
        await newUuario.save()
        // Buscar el documento correspondiente en la colección Productos
        const productoEnProductos = await Productos.findOne({ Producto });
        if (productoEnProductos && productoEnProductos.Cantidad > 0) {
            // Reducir la cantidad
            await Productos.updateOne({ Producto }, { $inc: { Cantidad: -Cantidad } });
        }
        // Eliminar el documento de la colección Cocina
        await Cocina.findByIdAndDelete(id);
        res.redirect('/Cocina');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
};