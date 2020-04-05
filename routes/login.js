var express = require('express');
var router = express.Router();
// deteccion de verbos http (get)
// definicion de subrutas
const usuariosModel = require('../models/usuariosModel');
const md5 = require('md5')
// get , post ,put , delete

router.get('/',(req,res,next)=> {
    res.render('login');
});


router.post('/',async(req,res,next)=>{
try {
    if(req.body.contra != "" && req.body.mail !=""){
        let result = await usuariosModel.authUser(req.body.mail,md5(req.body.contra));
        // result : todos los datos del usuario 
        // result : []
        if(result.length > 0) {
            console.log(result)
            let id = result[0].id_usuario;
            let permisos = result[0].permisos;
            // crear la sesion
            // creo una variable superglobal llamada usuario que almacena el id del usuario de la consulta en el model
            if(permisos == 1){
                console.log("ey, ingresaste y sos admin")
                req.session.admin = id;
                res.redirect('/admin');
            } else {
                console.log("sos un usuario comun pero animo, te queremos :D")
                req.session.usuario = id;
                res.redirect('/inicio');
            }
        } else {
            res.render('login',{message:"Usuario o password incorrectos"})

        }

    }
    else{
        res.render('login',{message:"los datos no son correctos"})
    }
} catch (error) {
    console.log(error)
}
    

})
module.exports = router;