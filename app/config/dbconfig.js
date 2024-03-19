//IMPORTING MYSQL PACKAGE.
const mysql = require('mysql');

//CREATE THE CONNECTION INFORMATION.
const pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    database:'vacation'
});

//THIS IS MAKING OUR "pool" VARIABLE HAVE ACCESS EVERYWHERE IN THIS PROJECT.
module.exports = pool;
//THIS ACTUALLY START THE MYSQL DATABASE CONNECTION.
//WE ARE MAKING err CATCHES IF SOMETHING GOES WRONG.
pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
      }
    }
 
    if (connection) connection.release()
 
    return
  });