const BoxModel = require("../models/boxModel");

async function createBox(userId, year, month) {
    try {
        if (typeof userId !== "number" || typeof year !== "number" || typeof month !== "number") {
            throw new Error("Type of data for create box is invalid");
        }

        const boxId = await BoxModel.create(userId, month, year);

        return boxId;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createBox
}