const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            isSuccess: false,
            message: "Unauthorize",
            data: null
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({
            isSuccess: false,
            message: "Invalid or expired token",
            data: null
        });
    }
}

module.exports = auth;