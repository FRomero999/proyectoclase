var express = require('express');
var router = express.Router();
var data = require("../data/data");



/* GET home page. */
router.get('/', function(req, res, next) {
  let courses = data.getCourses();
  let facilities = data.getFacilities();
  res.render('index', { courses, facilities });
});

module.exports = router;
