var express = require('express');
var courseModel = require('../api/courseModel');
var router = express.Router();
/* GET course listing. */
router.get('/getList/:pageNum/:pageSize/', function(req, res, next) {
	var data = {
		// type: 'python',
		pageNum: req.params.pageNum,
		pageSize: req.params.pageSize
	}
	if(req.query.type && req.query.type !== 'all') {
		data.type = req.query.type;
	}
	console.log(`请求参数为：`+ JSON.stringify(data));
	courseModel.getAllCourseInfo(data, function(err, rs, fields) {
		res.json(rs);
	});
});

router.get('/search/:pageNum/:pageSize/', function(req, res, next) {
	var data = {
		// keyword: 'python',
		pageNum: req.params.pageNum,
		pageSize: req.params.pageSize
	}
	if(req.query.keyword) {
		data.keyword = req.query.keyword;
	}else {
		data.keyword = '';
	}
	console.log(`请求参数为：`+ JSON.stringify(data));
	courseModel.searchCourse(data, function(err, rs, fields) {
		res.json(rs);
	});
  
});

module.exports = router;
