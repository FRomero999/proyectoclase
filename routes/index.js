var express = require('express');
var router = express.Router();
var data = require("../data/data");



/* GET home page. */
router.get('/', function(req, res, next) {
  let info = data.getCourses();
  res.render('index', { courses : info });
});

module.exports = router;
