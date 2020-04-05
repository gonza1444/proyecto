const express = require('express');
const router = express.Router();
const consultasModel = require('../models/consultasModel');
// Una peticion muestra la pàgina contacto
// Un post que envie el correo

// funcion que muestra la vista de contacto
router.get('/', (req,res,next)=> {
    res.render('consultas',{ title: 'Joy Intimates/consultas' });
});

// recibe los datos del formulario y envia un correo
router.post('/',async (req,res,next)=> {
    let objMsg = {

        nombre : req.body.nombre,
        correo : req.body.correo,
        telefono: req.body.telefono,
        comentario : req.body.comentario
    }
    // el id de la operacion se almacena en la variable respuesta
    let respuesta = await consultasModel.main(objMsg);
    // CANNOT SET HEADERS AFTER THEY ARE SENT
    if(respuesta) {

        res.render('consultas', {status : true,message : 'Correo enviado, en breve nos contactaremos via teléfono o por mail'})
    } else {
        res.render('consultas', {status : false,message : 'No se pudo enviar el correo , intente de nuevo más tarde'})
    }
})

module.exports = router;