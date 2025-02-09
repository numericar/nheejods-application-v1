const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const authHeader = req.cookies["access_token"];

    if (!authHeader || typeof authHeader !== "string") {
        return res.status(401).json({
            isSuccess: false,
            message: "Unauthorize",
            data: null
        });
    }

    const token = authHeader;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err.message);
        return res.status(403).json({
            isSuccess: false,
            message: "Invalid or expired token",
            data: null
        });
    }
}

module.exports = auth;