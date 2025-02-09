const express = require("express");
const authJwtMiddleware = require("./auth.jwt.middleware");

const router = express.Router();

router.use("/v1/auths", require("../routes/auths.route"));
router.use("/v1/boxs", authJwtMiddleware, require("../routes/boxs.route"));

router.get("", (req, res) => {
    return res.status(200).json({
        isSuccess: true,
        message: "Server is OK!",
        data: null
    });
});

module.exports = router;