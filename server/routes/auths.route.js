const express = require("express");

const authsController = require("../controllers/auths.controller");

const router = express.Router();

router.get("/hc", authsController.healthCheck);
router.post("/register", authsController.register);

module.exports = router;