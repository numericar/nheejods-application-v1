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

module.exports = {
    create
}