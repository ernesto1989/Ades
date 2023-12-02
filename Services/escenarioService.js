const dbConnection = require("../Database/mySQLConnection");

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

module.exports = {getAllEscenarios,getById,deleteEscenario};