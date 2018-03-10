var query = require('./db/connect');
var squel = require('squel');
var fs = require('fs');
var readLine = require('lei-stream').readLine;

var imports = {
	addVideo: function(data) {
		var sql = squel.insert()
						.into('lesson_detail')
						.setFieldsRows(data)
						.toString();
		query(sql, function(err, rs, fields){
			console.log(err)
			console.log(rs)
			console.log(fields)
		})
	},
	addLesson: function(data) {
		var sql = squel.insert()
						.into('cource_introduce')
						.setFieldsRows(data)
						.toString();
						console.log(sql)
		/*query(sql, function(err, rs, fields) {
			console.log(err)
			console.log(rs)
			console.log(fields)
		})*/
	},
	addCourse: function(data) {
		var sql = squel.insert()
						.into('course')
						.setFieldsRows(data)
						.toString();
			query(sql, function(err, rs, fields) {
				console.log(err)
				console.log(rs)
				console.log(fields)
			})
	},
	start: function(fileName) {
		// readLineStream第一个参数为ReadStream实例，也可以为文件名
		var strData = '';
		const s = readLine(fs.createReadStream(fileName), {
		  // 换行符，默认\n
		  newline: '\n',
		  // 是否自动读取下一行，默认false
		  autoNext: false,
		  // 编码器，可以为函数或字符串（内置编码器：json，base64），默认null
		  encoding: function (data) {
		    // return JSON.parse(data);
		    return data;
		  }
		});
		// 读取到一行数据时触发data事件
		s.on('data', (data) => {
		  // console.log(data);
		  strData += data;
		  s.next();
		});
		// 流结束时触发end事件
		s.on('end', () => {
			var dataObj = JSON.parse(strData);
			console.log(dataObj.length)
			// imports.addVideo(dataObj);
			// imports.addLesson(dataObj);
			// imports.addCourse(dataObj);
		});
		// 读取时出错
		s.on('error', (err) => {
		  console.error(err);
		});
	}
}

// imports.start('data/video4.json');
// imports.start('data/lessons4.json');
// imports.start('data/course.json');
imports.start('data/cource_introduce.json');
// 


