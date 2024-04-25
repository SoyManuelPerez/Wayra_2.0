const DS = require('../models/DS-1')
const Productos = require('../models/Producto')
const ventas = require('../models/ventas')
const Bar = require('../models/Bar')
const Cocina = require('../models/Cocina')
//Mostrar productos
module.exports.mostrar = (req, res) => {
  Promise.all([
    DS.find({}),
    Productos.find({})
  ])
    .then(([DS, Productos,]) => {
      res.render('DS-1', { DS: DS, productos: Productos });
    })
    .catch(err => console.log(err, 'Error mostrando datos'));
};
//Guardar Productos
module.exports.Crear = async (req, res) => {
  const id = req.params.id
  Productos.findById(id).lean().exec()
    .then(async producto => {
      if (producto.Tipo == "Bar") {
        const ahora = new Date();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();
        const Mesa = "DS-1"
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora = hora + ":" + minutos;
        const bar = new Bar({ Mesa, Producto, Precio, Usuario, Tipo, Hora })
        console.lognewUsuario
        await bar.save()
      } else if (producto.Tipo == "Cocina"){
        const ahora = new Date();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();
        const Mesa = "DS-1"
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora = hora + ":" + minutos;
        const cocina = new Cocina({ Mesa, Producto, Precio, Usuario, Tipo, Hora })
        console.lognewUsuario
        await cocina.save()
      }else {
        const ahora = new Date();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();
        const Producto = producto.Producto;
        const Precio = producto.Precio;
        const Tipo = producto.Tipo;
        const Usuario = "Manuel";
        const Hora = hora + ":" + minutos;
        const newUsuario = new DS({ Producto, Precio, Usuario, Tipo, Hora })
        console.lognewUsuario
        await newUsuario.save()
        // Actualizar la cantidad del producto en la colección Productos
        let Cantidad = producto.Cantidad;
        if (Cantidad > 0) {
          const id = producto._id.toString()
          Cantidad = Cantidad -= 1;
          await Productos.findByIdAndUpdate(id, { Cantidad });
        }

      }
    })
    .catch(err => {
      console.error(err);
    });
  res.redirect('/DS-1')
}
//Cancelar cuenta
module.exports.pagar = async (req, res) => {
  try {
    // Obtener todos los documentos de ModeloOrigen
    const documentosOrigen = await DS.find();
    // Iterar sobre los documentos obtenidos
    for (const documento of documentosOrigen) {
      // Crear un nuevo documento basado en el documento actual
      const nuevoDocumento = new ventas(documento.toObject());
      // Guardar el nuevo documento en la colección de ModeloDestino
      await nuevoDocumento.save();
    }
    console.log('Datos copiados exitosamente de ModeloOrigen a ModeloDestino.');
    // Enviar respuesta si es necesario
    res.status(200).send('Datos copiados exitosamente de ModeloOrigen a ModeloDestino.');
  } catch (error) {
    console.error('Error al copiar los datos:', error);

    // Enviar una respuesta de error si es necesario
    res.status(500).send('Ocurrió un error al copiar los datos: ' + error.message);
  }
}
//Eliminar de la cuenta
module.exports.eliminar = (req, res) => {
  const id = req.params.id
  DS.findByIdAndDelete({ _id: id }).exec()
    .then(resultado => {
      console.log("Objeto eliminado : ", resultado);
    })
    .catch(error => {
      console.log(error)
    });
  res.redirect('/DS-1')
}

