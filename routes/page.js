var express = require('express');
var path = require('path');
var router = express.Router();
var viewBasePath = path.join(path.resolve(__dirname, '..'), 'public/html');
/* GET home page. */
router.get('/video', function(req, res, next) {
  res.sendFile(viewBasePath + '/video.html');
});
router.get('/course', function(req, res, next) {
  res.sendFile(viewBasePath + '/course.html');
});

module.exports = router;
