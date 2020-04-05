var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('bodys', { title: 'Joy Intimates/productos/bodys' });
  });



  module.exports = router;