const escenariosRest = require("./escenariosRest");
const datasetsRest = require("./datasetsRest");
const express = require('express');
const router = express.Router();

//API PARA TABLA ESCENARIOS
router.get("/ades/api/getEscenarios",escenariosRest.getAllEscenarios);
router.post("/ades/api/getEscenarioById",escenariosRest.getEscenarioById);
router.post("/ades/api/insertEscenario",escenariosRest.insertaEscenario); 
router.delete("/ades/api/deleteEscenarioById",escenariosRest.deleteEscenarioById);

router.get("/ades/api/getDatasets",datasetsRest.getAll);
router.post("/ades/api/insertDataset",datasetsRest.insertDataset);
router.delete("/ades/api/deleteDataset",datasetsRest.deleteDataset);

module.exports = router;