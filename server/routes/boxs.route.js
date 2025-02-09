const express = require("express");
const boxsController = require("../controllers/boxs.controller");

const router = express.Router();

router.get("/hc", boxsController.healthCheck);
router.post("", boxsController.createBox);
router.post("/:boxId/items", boxsController.createItems);
router.get("", boxsController.getBoxs);

module.exports = router;