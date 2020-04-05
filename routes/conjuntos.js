var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('conjuntos', { title: 'Joy Intimates/productos/conjuntos' });
  });



  module.exports = router;