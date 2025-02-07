const express = require("express");

const router = express.Router();

router.get("", (req, res) => {
    return res.status(200).json({
        isSuccess: true,
        message: "Server is OK!",
        data: null
    });
});

module.exports = router;