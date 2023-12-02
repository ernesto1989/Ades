const escenariosRest = require("./EscenariosRest");
const express = require('express');
const router = express.Router();

router.get("/api/getEscenarios",escenariosRest.getAllEscenarios);
router.post("/api/getEscenarioById",escenariosRest.getEscenarioById);
router.delete("/api/deleteEscenarioById",escenariosRest.deleteEscenarioById);

module.exports = router;