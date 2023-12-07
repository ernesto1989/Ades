const escenariosRest = require("./escenariosRest");
const datasetsRest = require("./datasetsRest");
const express = require('express');
const router = express.Router();

//API PARA TABLA ESCENARIOS
router.get("/api/getEscenarios",escenariosRest.getAllEscenarios);
router.post("/api/getEscenarioById",escenariosRest.getEscenarioById);
router.post("/api/insertEscenario",escenariosRest.insertaEscenario); 
router.delete("/api/deleteEscenarioById",escenariosRest.deleteEscenarioById);

router.get("/api/getDatasets",datasetsRest.getAll);
router.post("/api/insertDataset",datasetsRest.insertDataset);
router.delete("/api/deleteDataset",datasetsRest.deleteDataset);

module.exports = router;