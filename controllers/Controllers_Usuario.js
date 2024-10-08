const jsonwebtoken = require('jsonwebtoken')
const Usuario = require('../models/Usuarios')
const dotenv =  require('dotenv')
dotenv.config();
//Mostrar Usuarios
module.exports.mostrar = (req, res) => {
    Usuario.find({})
    .then(usuario => res.render('registro', {usuario: usuario}))
    .catch(err => console.log(err, 'Error mostrar Usuario no encontrado'))
}
//Guardar Usuarios
module.exports.Crear = async (req,res)=>{
const {user,type,password} = req.body
    if(!user || !password || !type){
      res.redirect('/registro')
    }
    else{
       const Usuariobuscar = await Usuario.findOne({user:user});
       if(Usuariobuscar){
        return res.status(400).send({status:"Error",message:"Usuario Ya Registrado"})
       }else{
        const newUsuario = new Usuario({user,type,password})
        await newUsuario.save()
        res.redirect('/registro')
       }
    }
}
//Eliminar Usuario
module.exports.eliminar = (req,res) =>{
    const id = req.params.id
    Usuario.findByIdAndDelete({_id:id}).exec()
  .then(resultado => {
    console.log("Objeto eliminado : ", resultado); 
  })
  .catch(error => {
    console.log(error) 
  });
    res.redirect('/registro')       
}
//Editae 
module.exports.editar = (req,res) =>{
    const usuario = req.body.User
    const type = req.body.type
    const password = req.body.password
    Usuario.findOneAndUpdate({user:usuario.trim()},{type,password}).exec()
    .then(resultado=>{
        console.log("Objeto Actualizado : ", resultado); 
    })
    .catch(error=>{
        console.log(error) 
    })
    res.redirect('/registro')  
}
//Verificar Usuario
module.exports.Login =  (req,res)=>{
    const user = req.body.user;
    const password = req.body.password;
    if(!user || !password){
      return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }
    Usuario.findOne({ user: user }).lean().exec()
    .then(usuario => {
        if(password!== usuario.password){
          return res.status(400).send({status:"Error",message:"Error durante login"})
        }
        const type = usuario.type
        if(type === "admin"){
            const token = jsonwebtoken.sign(
                {user:usuario.user},
                process.env.JWT_SECRET,
                {expiresIn:process.env.JWT_EXPIRATION});
            
                const cookieOption = {
                  expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                  path: "/"
                }
                res.cookie("jwt",token,cookieOption);
            res.send({status:"ok",message:"Usuario loggeado",redirect:"/hospedaje"});
          }else if(type === "mesero"){
            const token = jsonwebtoken.sign(
                {user:usuario.user},
                process.env.JWT_SECRET,
                {expiresIn:process.env.JWT_EXPIRATION});
            
                const cookieOption = {
                  expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                  path: "/"
                }
                res.cookie("jwt",token,cookieOption);
                res.send({status:"ok",message:"Usuario loggeado",redirect:"/hospedaje"});
          }   else if(type === "bar"){
            res.send({status:"ok",message:"Usuario loggeado",redirect:"/Bar"});
          } else if(type === "cocina"){
            res.send({status:"ok",message:"Usuario loggeado",redirect:"/cocina"});
          }
    })
    .catch(err => {
        console.error(err);
        res.redirect('/') 
    });
    
}
module.exports.logout =(req,res)=>{
    res.render('login')
}


