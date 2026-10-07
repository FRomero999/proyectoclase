var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '2DAW' });
});

/* GET Contact page. */
router.get('/contacto', function(req, res, next) {
  res.render('contact', {});
});

module.exports = router;
