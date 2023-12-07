/**
 * Servicio que contiene toda la interacción necesaria con la tabla de Escenarios de la base de datos.
 * 
 * Aquí se incluyen los métodos para operar con Escenarios de manera genérica.
 * 
 * Pendientes 06/12/2023:
 * 
 * 1. ¿Se implementará aquí la llamada a crear tablas de escenarios?
 */


const dbConnection = require("../Database/mySQLConnection");

let currDate = '';
let counter = 1;

/**
 * Método que genera un id de escenario en base a la fecha actual y el número
 * de escenarios generados el día de hoy.
 * 
 * @returns un id de escenario generado en automático.
 */
function generaIdEscenario(){
  let id = 'E';
  let d = new Date();
  const y1 = d.getFullYear().toString().substr(-2);
  const m1 = String(d.getMonth() + 1).padStart(2, '0');
  const d1 = String(d.getDate()).padStart(2, '0');

  const fecha = id + d1 + m1 + y1;

  if(currDate == ''){
    currDate = id + d1 + m1 + y1;
  }

  if(currDate !== fecha){
    currDate = id + d1 + m1 + y1;
    counter = 1;
  } 

  let fRet = id + d1 + m1 + y1 + '_' + counter;
  counter += 1 ;
  return fRet;
}

/**
 * Método getAll. Búsca una lista de escenarios en la tabla 
 * Escenarios de la base de datos provista.
 * 
 * @returns una lista de escenarios.
 */
async function getAllEscenarios(){

  let sql = 'SELECT * FROM escenarios';
  let conn = await dbConnection.getConnection();

  let [rows,fields] = await conn.execute(sql,null);

  console.log(rows);
  console.log(fields);
  conn.end();
  return rows;
}

/**
 * Método que busca un escenario por id
 * 
 * @param {*} id el id del escenario a buscar. Por default, busca el base.
 * @returns el escenario encontrado
 */
async function getById(id = 'ESC-BASE'){

  let sql = 'SELECT * FROM escenarios WHERE id_escenario = ?';
  let conn = await dbConnection.getConnection();

  let params = [id];
  let [rows,fields] = await conn.execute(sql,params);

  console.log(rows);
  console.log(fields);
  conn.end();
  return rows;
}

/**
 * Método que inserta un nuevo escenario en la base de datos.
 * Busca primero el nombre del escenario y luego inserta el dato en la BD
 * 
 * @param {*} escenario objeto escenario a guardar
 * @returns Estatus del objeto almacenado.
 */
async function insertEscenario(escenario){

  let estatus = 200;
  let ar = 0;
  let id_escenario = '';

  try{
    let sql = 'INSERT INTO escenarios (id_escenario,nombre,descripcion,f_ini,f_fin,base) VALUES (?,?,?,?,?,?)';
    let conn = await dbConnection.getConnection();
    id_escenario = generaIdEscenario();
    let params = [id_escenario, escenario.nombre, escenario.descripcion, escenario.f_ini, escenario.f_fin, escenario.base];
    let [rows,fields] = await conn.execute(sql,params);
    ar = rows.affectedRows;
    console.log(rows.affectedRows);
    conn.end();
  }catch(err){
    estatus = 500; 
  }finally{
    return {
      "id":id_escenario,
      "estatus":estatus,
      "affectedRows":ar
    };
  }
}



/**
 * Método que recibe un id y ejecuta el delete de escenarios en la bd
 * 
 * @param {*} id el id de escenario a borrar
 * @returns regresa un objeto Json con:
 * 
 * 1. El id del escenario a borrar
 * 2. El estatus del delete (si algo tronó)
 * 3. La cantidad de filas borradas
 * 4. Estatus de la petición 
 *     a. 200 -> no se lanzó una excepción
 *     b. 500 -> se lanzó una excepción
 */
async function deleteEscenario(id){

  let estatus = 200;
  let ar = 0;

  try{
    let sql = 'DELETE FROM escenarios WHERE id_escenario = ?';
    let conn = await dbConnection.getConnection();
    let params = [id];
    let [rows,fields] = await conn.execute(sql,params);
    ar = rows.affectedRows;
    console.log(rows.affectedRows);
    conn.end();
  }catch(err){
    estatus = 500; 
  }finally{
    return {
      "id":id,
      "estatus":estatus,
      "affectedRows":ar
    };
  }
}

module.exports = {getAllEscenarios,getById, insertEscenario,deleteEscenario};