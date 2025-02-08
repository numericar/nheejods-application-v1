const bcrypt = require("bcryptjs");
const userService = require("../services/users.service");

function healthCheck(req, res, next) {
    return res.status(201).json({
        isSuccess: true,
        message: "Server is ok",
        data: null,
    });
}

async function register(req, res, next) {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string")
            return res.status(400).json({
                isSuccess: false,
                message: "Credentials is invalid",
                data: null,
            });

        const passwordHashed = bcrypt.hashSync(password, 10);
        
        await userService.create(email, passwordHashed);

        return res.status(201).json({
            isSuccess: true,
            message: "Created",
            data: null,
        });
    } catch (err) {
        return res.status(500).json({
            isSuccess: false,
            message: err.message,
            data: null
        });
    }
}

module.exports = {
    healthCheck,
    register,
};
