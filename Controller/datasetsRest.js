const datasetsService = require("../Services/datasetsService");

/**
  * Endpoint #1. Agregamos un método de GetAllByIdEscenario
  */
async function getAll(req,res){
  
  try{
    console.log("Método getAll datasets");
    let id_escenario = req.body.id_escenario; 
    var tablas = await datasetsService.getAllDatasets();
    console.log(tablas);
    res.status(200);
    res.json({
      tablas
    });
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}


/**
 * Endpoint #2. Permitirá agregar un nuevo dataset.
 * 
 * Por implementar: 
 * 
 * 1. Validación de campos
 */
async function insertDataset(req,res){
  try{
    console.log("Método createDataset");
    let ds = req.body.dataset; 
    let estatus = await datasetsService.insertDataset(ds);

    res.status(200);
    res.json(estatus);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}

/**
 * Endpoint #03. Borra un dataset por Id.
 * 
 */
async function deleteDataset(req,res){
  
  try{
    console.log("Método deleteDataset");
    
    let id = req.body.id; 
    let estatus = await datasetsService.deleteDataset(id)
    res.status(200);
    res.json(estatus);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}


module.exports = {getAll, insertDataset,deleteDataset};