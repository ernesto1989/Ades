const escService = require("../Services/escenarioService");

/**
  * Endpoint #1. Agregamos un método de GetAll
  */
async function getAllEscenarios(req,res){
  
  try{
    console.log("Método get All de Escenarios");
    var escenarios = await escService.getAllEscenarios();
    console.log(escenarios);
    res.status(200);
    res.json({
      escenarios
    });
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}
  

/**
  * Endpoint #2. Método get by ID
  * 
  * Busca un escenario por ID
  */
async function getEscenarioById(req,res){
  
  try{
    console.log("Método get by ID de Escenarios");
    console.log("Obteniendo Id de la petición");
    let id = req.body.id; 
    let escenario = await escService.getById(id);
    console.log(escenario);
    res.status(200);
    res.json({
      escenario
    });
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function insertaEscenario(req,res){
  try{
    console.log("Método create Escenarios");
    
    let escenario = req.body.escenario; 
    let estatus = await escService.insertEscenario(escenario);

    res.status(200);
    res.json(estatus);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}

/**
 * Endpoint #04. Borra un escenario por Id.
 * 
 */
async function deleteEscenarioById(req,res){
  
  try{
    console.log("Método delete by ID de Escenarios");
    console.log("Obteniendo Id de la petición");
    let id = req.body.id; 
    let estatus = await escService.deleteEscenario(id);
    res.status(200);
    res.json(estatus);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
}


module.exports = {getAllEscenarios,getEscenarioById, insertaEscenario,deleteEscenarioById};