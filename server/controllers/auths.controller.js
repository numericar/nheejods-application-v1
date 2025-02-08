const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

        const userIsExist = await userService.isExistByEmail(email);
        if (userIsExist) return res.status(400).json({
            isSuccess: false,
            message: "Email is aleady to use",
            data: null
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

async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        if (typeof email !== "string" || typeof password !== "string")
            return res.status(400).json({
                isSuccess: false,
                message: "Credentials is invalid",
                data: null,
            });

        const userIsExist = await userService.isExistByEmail(email);
        if (!userIsExist) return res.status(401).json({
            isSuccess: false,
            message: "Email or Password is invalid",
            data: null
        });

        const passwordHashed = await userService.getPasswordHashed(email);
        
        const isValidPassword = bcrypt.compareSync(password, passwordHashed);
        if (!isValidPassword) return res.status(401).json({
            isSuccess: false,
            message: "Email or Password is invalid",
            data: null
        });

        const JWT_SECRET = process.env.JWT_SECRET;
        if (typeof JWT_SECRET === "undefined") throw new Error("JWT_SECRET configuration");

        const userId = await userService.getUserId(email);
        const token = jwt.sign({
            userId: userId
        }, JWT_SECRET, {
            expiresIn: '1d'
        });

        res.cookie("access_token", token, {
            httpOnly: true
        });

        return res.status(200).json({
            isSuccess: true,
            message: "Successful",
            data: null
        });
    } catch (err) {
        return res.status(400).json({
            isSuccess: false,
            message: err.message,
            data: null
        })
    }
}

module.exports = {
    healthCheck,
    register,
    login
};
