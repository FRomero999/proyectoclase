/* Data module: provides access to JSON data files for use in controllers */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname);

/**
 * Reads and returns the content of courses.json
 * @returns {Array} Array of course objects
 */
function getCourses() {
  const raw = fs.readFileSync(path.join(dataDir, 'courses.json'), 'utf8');
  return JSON.parse(raw);
}

/**
 * Returns a single course by its id
 * @param {string} id Course identifier
 * @returns {Object|undefined} Matching course object
 */
function getCourseById(id) {
  return getCourses().find(course => course.id === id);
}

/**
 * Reads and returns the content of facilities.json
 * @returns {Array} Array of facility objects
 */
function getFacilities() {
  const raw = fs.readFileSync(path.join(dataDir, 'facilities.json'), 'utf8');
  return JSON.parse(raw);
}

module.exports = { getCourses, getCourseById, getFacilities };
