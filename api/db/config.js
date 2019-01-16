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
      host            : 'xx.xx.xx.xx',
      user            : 'root',
      password        : 'password',
      database        : 'custblog'
  }
}

module.exports = config;
