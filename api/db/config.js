var config = {
  local: {
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'custblog'
  },
  prod: {
      connectionLimit : 10,
      host            : 'example.org',
      user            : 'bob',
      password        : 'secret',
      database        : 'my_db'
  }
}

module.exports = config;
