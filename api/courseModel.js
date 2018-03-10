var query = require('./db/connect');
var squel = require('squel');

var courseModel = {
	getAllCourseInfoByType: function(data, callback) {
		var sql = squel.select()
						.from('course')
						.where('course.course_type_name=?', data.type)
						.order('id', true)
						.toString();
		query(sql, function(err, rs, fields) {
			callback(err, rs, fields);
		});
	},
	getCourseIntorduceById: function(data, callback) {
		var sql = squel.select()
						.distinct()
						.from('course_introduce')
						.where('course_id=?', data.course_id)
						.toString();

		query(sql, function(err, rs, fields) {
			callback(err, rs, fields);
		});
	},
	getLessonListByCourseId(data, callback) {
		var sql = squel.select()
						.from('lesson')
						.where('course_id=?', data.course_id)
						.toString();
		query(sql, function(err, rs, fields) {
			callback(err, rs, fields);
		})
	}
}
/*var data = {
	type: 'python'
}
courseModel.getAllCourseInfoByType(data, function(err, rs, fields) {
	console.log(rs)
});*/
/*var data = {
	course_id: '395'
};
courseModel.getCourseIntorduceById(data, function(err, rs, fields) {
	console.log(rs);
})*/
var data = {
	course_id: '395'
};
courseModel.getLessonListByCourseId(data, function(err, rs, fields) {
	console.log(rs);
});
// module.exports = courseModel;