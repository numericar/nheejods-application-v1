const express = require("express");
const boxsController = require("../controllers/boxs.controller");

const router = express.Router();

router.get("/hc", boxsController.healthCheck);

module.exports = router;