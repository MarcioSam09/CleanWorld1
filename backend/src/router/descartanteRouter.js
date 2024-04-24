const express = require("express");
const router = express.Router();
const descartanteController = require("../controller/descartanteController");

router.get("/descartante", descartanteController.getAllDescartante);
router.post("/descartante", descartanteController.createDescartante);
router.delete("/descartante", descartanteController.deleteDescartante);