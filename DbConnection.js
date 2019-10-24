var mysq = require('mysql');

module.exports  =()   =>{
  return mysq.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database: 'objetos',
    port : 3306
  })
}
