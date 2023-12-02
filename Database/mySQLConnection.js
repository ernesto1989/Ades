/**
 * Módulo que permite una conexión asíncrona con MYSQL.
 * 
 * Se intentó hacer una conexión síncrona con la base de datos, pero JS es un puto pedo
 * bajo ese formato.
 */
const mysql = require('mysql2/promise');


/**
 * Método que configura un objeto conexión y lo regresa a quien lo solicite.
 */
async function getConnection(){
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "4747819",
    database: "ades_test",
    rowsAsArray: true 
  });

  return connection;
}



module.exports = {getConnection};
