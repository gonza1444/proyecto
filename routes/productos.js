var express = require('express');
var router = express.Router();
const productosModel = require('../models/productosModel');
const moment = require('moment');


router.get('/', (req,res,next)=> {
  res.render('productos', {message : 'Productos'});
})

  router.get('/productos', async (req,res,next)=> {
    var status_session;
    res.render('productos', { title: 'Joy Intimates/productos' });
    if(req.session.usuario || req.session.admin) {
        status_session = true;
    } else {
        status_session = false;
    }
    let data = await productosModel.getProductos() // todas los productos de la tabla productos : [{}]
    res.render('productos',
     {
         message : 'Todas los productos', 
         productos_array : data,
         session : status_session
    });
    console.log('data');
    
});


  
  module.exports = router;