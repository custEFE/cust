var express = require('express');
var userModel = require('../api/userModel');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	userModel.getUser({}, function(err, rs, fields) {
		res.send(rs);
	})
  
});

module.exports = router;
