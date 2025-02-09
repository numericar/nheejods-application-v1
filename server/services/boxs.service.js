const BoxModel = require("../models/boxModel");
const BoxItemModel = require("../models/boxItemModel");
const ITEM_TYPE_CONFIG = require("../configs/itemType.config");

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

async function isOwnerBox(userId, boxId) {
    try {   
        if (typeof userId !== "number" || typeof boxId !== "number") {
            throw new Error("Type of data for find owner is invalid");
        }

        const box = await BoxModel.findById(boxId);

        return box.userId === userId;
    } catch (err) {
        throw err;
    }
}

async function addIncomeItem(boxId, title, amount) {
    try {
        if (typeof boxId !== "number" || typeof title !== "string" || typeof amount !== "number") {
            throw new Error("Type of data for add income item is invalid");
        }

        await BoxItemModel.create(boxId, title, amount, ITEM_TYPE_CONFIG.INCOME);
    } catch (err) {
        throw err;
    }
}

async function addExpenseItem(boxId, title, amount) {
    try {
        if (typeof boxId !== "number" || typeof title !== "string" || typeof amount !== "number") {
            throw new Error("Type of data for add income item is invalid");
        }

        await BoxItemModel.create(boxId, title, amount, ITEM_TYPE_CONFIG.EXPENSE);
    } catch (err) {
        throw err;
    }
}

async function getByUserId(userId, year, month) {
    try {
        if (typeof userId !== "number") {
            throw new Error("Type of data for get boxs by userId is invalid");
        }

        const boxs = await BoxModel.findByUserId(userId, year, month);

        return boxs;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createBox,
    isOwnerBox,
    addIncomeItem,
    addExpenseItem,
    getByUserId
}