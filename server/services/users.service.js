const UserModel = require("../models/userModel");

async function create(email, password) {
    try {
        if (typeof email !== "string" || typeof password !== "string") {
            throw new Error("Type of username or password is invalid");
        }

        await UserModel.create({
            email: email,
            password: password
        });
    } catch (err) {
        throw err;
    }
}

async function isExistByEmail(email) {
    try {
        if (typeof email !== "string") throw new Error("Type of email is invalid");

        let user = await UserModel.findByEmail(email);
        const isExist = (user !== null);

        user = null;

        return isExist;
    } catch (err) {
        throw err;
    }
}

async function getPasswordHashed(email) {
    try {
        if (typeof email !== "string") throw new Error("Type of email is invalid");

        return UserModel.findPasswordHashByEmail(email);
    } catch (err) {
        throw err;
    }
}

async function getUserId(email) {
    try {
        if (typeof email !== "string") throw new Error("Type of email is invalid");

        return UserModel.findUserIdByEmail(email);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    create,
    isExistByEmail,
    getPasswordHashed,
    getUserId
}