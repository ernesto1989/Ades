/**
 * Módulo de servicios de escenario.
 * 
 * 1. Valida que las tablas requeridas por el AdEs se encuentren disponibles
 *    a) Tabla de escenarios
 *    b) Tabla de elementos de un escenario (tablas de datos que lo componen)
 * 2. Permite operar sobre un escenario existente
 *    a) Crear uno nuevo a partir de un escenario base
 *    b) Clonar un escenario
 *    c) Crear un escenario desde cero
 *    d) Consultar un escenario
 *    e) Editar un escenario
 *    f) Borrar un escenario
 */
const db = require('../Database/mySQLConnection');
const prompt = require('prompt-sync')();

//Query de tala escenarios
var tablaEsc = 'CREATE TABLE escenarios ( ' +
    'id_escenario varchar(10) NOT NULL, ' + 
    'nombre varchar(30) NOT NULL, ' + 
    'descripcion varchar(100) DEFAULT NULL, ' + 
    'f_ini datetime, ' + 
    'f_fin datetime, ' + 
    'base varchar(10)' + 
  ')';

/**
 * Función que permite validar que las tablas requeridas por el AdEs se encuentran
 * disponibles en la base de datos.
 * 
 * Valida que existan:
 * 1. Tabla Escenarios
 * 2. Composición_escenarios (por implementar)
 */
function validaTablasAdes(){
    var syncConn = db.getConnection();
    syncConn.queueQuery(tablaEsc);
    syncConn.dispose();
}

function listaEscenariosDisponibles(){
  var syncConn = db.getConnection();
    var result = syncConn.query('SELECT * FROM escenarios');
    syncConn.dispose();
    console.log("Escenarios disponibles");
    for(r in result)
      console.log(result[r]);
    
    opt = parseInt(prompt('opcion> '));
    
}


module.exports = {validaTablasAdes,listaEscenariosDisponibles};