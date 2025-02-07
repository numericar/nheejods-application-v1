const express = require("express");

const router = express.Router();

router.use("/v1/auths", require("../routes/auths.route"));

router.get("", (req, res) => {
    return res.status(200).json({
        isSuccess: true,
        message: "Server is OK!",
        data: null
    });
});

module.exports = router;