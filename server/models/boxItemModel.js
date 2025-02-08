const dbContext = require("../utils/dbContext");

class BoxItemModel {
    static async create(boxId, title, amount) {
        try {
            if (typeof boxId !== "number" || typeof title !== "string" || typeof amount !== "number") {
                throw new Error("Type of data for create box item is invalid");
            }

            const currentDate = new Date();

            const query = "INSERT INTO nheejods_db.box_items (box_id, title, amount, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
            await dbContext.query(query, [boxId, title, amount, currentDate, currentDate]);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = BoxItemModel;