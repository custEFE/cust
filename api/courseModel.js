var query = require('./db/connect');
var squel = require('squel');

var courseModel = {
	getAllCourseInfo: function(data, callback) {
		var sql = '';
		if(data.type) {
			sql = squel.select()
						.from('course')
						.where('course.course_type_name=?', data.type)
						.order('id', true)
						.limit(data.pageSize)
						.offset((data.pageNum - 1) * data.pageSize)
						.toString();
		}else {
			sql = squel.select()
						.from('course')
						// .where('course.course_type_name=?', data.type)
						.order('id', true)
						.limit(data.pageSize)
						.offset((data.pageNum - 1) * data.pageSize)
						.toString();
		}
		
		query(sql, function(err, rs, fields) {
			callback(err, rs, fields);
		});
	},
	searchCourse: function(data, callback) {
		var sql = squel.select()
						// .distinct('course_name')
						.from('course')
						.field('id')
						.field('course_name')
						.field('course_type_name')
						.field('img')
						.field('learning_time')
						.field('ctime')
						.where(
							squel.expr()
							.and(`course_name like '%${data.keyword}%'`)
							.or(`course_type_name like '%${data.keyword}%'`)
						)
						.order('id', true)
						.limit(data.pageSize)
						.offset((data.pageNum - 1) * data.pageSize)
						.toString();
						console.log(sql)
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
						.join("lesson_detail", null, "lesson.lesson_id = lesson_detail.lesson_id")
						.toString();
						console.log(sql)
		query(sql, function(err, rs, fields) {
			callback(err, rs, fields);
		})
	},
	getLessonById(data, callback) {
		var sql = squel.select()
						.from('lesson_detail')
						.where('lesson_id=?', data.lesson_id)
						.toString();
		query(sql, function(err, rs, fields) {
			callback(err, rs, fields);
		})
	}
}
/*var data = {
	// type: 'python',
	pageNum: 2,
	pageSize: 10
}
courseModel.getAllCourseInfo(data, function(err, rs, fields) {
	console.log(rs)
});*/
/*var data = {
	keyword: 'web',
	pageNum: 1,
	pageSize: 10
}
courseModel.searchCourse(data, function(err, rs, fields) {
	console.log(rs)
});*/
/*var data = {
	course_id: '395'
};
courseModel.getCourseIntorduceById(data, function(err, rs, fields) {
	console.log(rs);
})*/
/*var data = {
	course_id: '395'
};
courseModel.getLessonListByCourseId(data, function(err, rs, fields) {
	console.log(rs);
});*/
/*var data = {
	lesson_id: '1-132'
};
courseModel.getLessonById(data, function(err, rs, fields) {
	console.log(rs);
});*/
module.exports = courseModel;