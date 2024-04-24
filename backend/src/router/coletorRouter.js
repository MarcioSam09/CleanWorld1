const express = require("express");
const router = express.Router();
const coletorController = require("../controller/coletorController.js");

router.get("/coletor", coletorController.getAllColetor);
router.post("/coletor", coletorController.createColetor);
router.put("/coletor", coletorController.updatecoletor);
router.delete("/coletor", coletorController.deleteColetor);

module.exports = router;