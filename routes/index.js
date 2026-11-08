var express = require('express');
var createError = require('http-errors');
var router = express.Router();
var data = require("../data/data");



/* GET home page. */
router.get('/', function(req, res, next) {
  let courses = data.getCourses();
  let facilities = data.getFacilities();
  res.render('index', { courses, facilities });
});

router.get('/program/:id', function(req, res, next) {
  const course = data.getCourseById(req.params.id);
  if (!course) {
    return next(createError(404, 'Course not found'));
  }
  res.render('course', { course });
});

module.exports = router;
