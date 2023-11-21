/**
 * Módulo que permite una conexión síncrona con MYSQL.
 * 
 * Ayuda a resolver temas de asincronía y callbacks que hace el código más 
 * dificil de mantener (y me lleva a escribir tonterías).
 * 
 */
var MySql = require('sync-mysql');
 

/**
 * Método que genera una conexión síncrona de SQL.
 * @returns objeto de conexión a la base de datos
 */
function getConnection(){
    
    var connection = new MySql({
        host: 'localhost',
        user: 'root',
        password: '4747819',
        database: 'ades_test'
    });

    return connection;
}


module.exports = {getConnection};