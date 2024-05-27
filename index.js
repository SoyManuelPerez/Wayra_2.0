const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const dotenv =  require('dotenv')
dotenv.config();
// inicializacion
const app = express()
//Configuracion
app.set(path.join(__dirname,'view'))
app.set('view engine', 'ejs',)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
//Middlewares
app.use(cookieParser());
//Rutas
Usuarios = require("./routers/user.routes")
Main = require("./routers/main.routes")
Productos = require("./routers/productos.routes")
Bar = require("./routers/Bar.routes")
Cocina = require("./routers/Cocina.routes")
Hb = require("./routers/Habitaciones.routes")
Ds = require("./routers/Ds.routes")
entrantes = require("./routers/entrante.routes")
app.use(Bar)
app.use(Main)
app.use(Usuarios)
app.use(Productos)
app.use(Cocina)
app.use(Hb)
app.use(Ds)
app.use(entrantes)
// Servidor 
app.set('port',process.env.PORT || 4000);
app.listen(app.get('port'))
console.log("Servidor corriendo en http://localhost:"+app.get("port"));

//Conexion a la base de datos
mongoose.connect(process.env.URL,{   
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(db => console.log('Conectado a la BD '))
.catch( err => console.log(err));
