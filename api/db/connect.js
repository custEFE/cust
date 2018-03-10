var mysql = require('mysql');
var config = require('./config');
var pool = mysql.createPool(config.prod);

var query = function(sql, callback) {
	var connection = pool.getConnection(function(err, connection) {
		connection.query(sql, function(error, rs, fields) {
			callback(error, rs, fields);			
		})
		connection.release();
		if(err) throw err;
	})
}
pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

module.exports = query;