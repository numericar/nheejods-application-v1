const dbContext = require("../utils/dbContext");

class BoxItemModel {
    static async create(boxId, title, amount, itemType) {
        try {
            if (typeof boxId !== "number" || typeof title !== "string" || typeof amount !== "number" || typeof itemType !== "number") {
                throw new Error("Type of data for create box item is invalid");
            }

            let currentDate = new Date();

            const query = "INSERT INTO nheejods_db.box_items (box_id, title, amount, item_type, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)";
            await dbContext.query(query, [boxId, title, amount, itemType, currentDate, currentDate]);

            currentDate = null;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = BoxItemModel;