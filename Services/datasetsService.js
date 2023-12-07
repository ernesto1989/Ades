/**
 * Servicio que permitirá administrar los datasets (tablas) que administrará 
 * el AdEs. 
 * 
 * Tal como se diseñó, se tiene el objetivo de que esta tabla sea el catálogo (administrable)
 * para saber qué tablas deberá administrar el AdEs.
 * 
 * 
 * Por ajustar:
 * Incluir campo para nombre de la tabla en BD y nombre con el que se mostrará en la aplicación
 */
const dbConnection = require("../Database/mySQLConnection");

/**
 * Método que obtiene de la tabla Datasets todos los datasets que se
 * manejarán por el ades
 * 
 * @returns lista de datasets
 */
async function getAllDatasets(){

  let sql = 'SELECT * FROM datasets';
  let conn = await dbConnection.getConnection();

  let [rows,fields] = await conn.execute(sql,null);

  console.log(rows);
  console.log(fields);
  conn.end();
  return rows;
}


/**
 * Método que permitirá insertar un nuevo dataset en 
 * el AdEs
 * 
 * @param {*} dataset El dataset a insertar
 * @returns estatus del insert
 */
async function insertDataset(dataset){

  let estatus = 200;
  let ar = 0;
  let gid = 0;

  try{
    let sql = 'INSERT INTO datasets (nombre,descripcion) VALUES (?,?)';
    let conn = await dbConnection.getConnection();

    let params = [dataset.nombre, dataset.descripcion];
    let [rows,fields] = await conn.execute(sql,params);
    ar = rows.affectedRows;
    gid = rows.insertId;
    conn.end();
  }catch(err){
    estatus = 500; 
  }finally{
    return {
      "id":gid,
      "estatus":estatus,
      "affectedRows":ar
    };
  }
}

/**
 * Método que permitirá borrar un dataset de los datasets administrados por el AdEs
 * 
 * @param {*} id id del dataset
 * @returns estatus del delete
 */
async function deleteDataset(id){

  let estatus = 200;
  let ar = 0;

  try{
    let sql = 'DELETE FROM datasets WHERE id_dataset = ?';
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

module.exports = {getAllDatasets,insertDataset, deleteDataset};