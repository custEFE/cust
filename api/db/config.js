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
      host            : '140.143.163.52',
      user            : 'root',
      password        : 'wenyujie@123',
      database        : 'custblog'
  }
}

module.exports = config;
