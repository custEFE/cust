var query = require('./db/connect');
var squel = require('squel');

var userModel = {
	getUser: function(data, callback) {
		var sql = squel.select()
						.from('lesson')
						.toString();
		query(sql, function(err, rs, fields) {
			// console.log(rs);
			callback(err, rs, fields);
		})
	}
}

// userModel.getUser();
module.exports = userModel;