const express = require('express');
const router = express.Router();
const usuariosModel = require('../models/usuariosModel');
const md5= require('md5')//32 caracteres|no es reversible
// 1. router.get() : muestro la vista de registro
// 2. router.post()

//  /registro
router.get('/', (req,res,next)=> {
    res.render('registro');
})

router.post('/', async (req,res,next)=> {
    // -
    console.log(req.body.mail);
    console.log(req.body.nombre);
    console.log(req.body.telefono);
    console.log(md5(req.body.password));
    
    let objUsr = {
        mail : req.body.mail,
        nombre : req.body.nombre,
        telefono : req.body.telefono,
        password : md5(req.body.password),
        fecha_nacimiento : req.body.fecha
        
    }
    // validaciones
    let result = await usuariosModel.createUser(objUsr); // estado de la operacion insert
    // evalua el true
    if(result){
        res.render('registro', {status : true,message : 'Registro exitoso'});
    } else {
        res.render('registro', {status : false,message : 'Error'}); 
    }
})


module.exports = router;
