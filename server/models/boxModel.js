const dbContext = require("../utils/dbContext");

class BoxModel {
    static async findByUMY(userId, month, year) {
        try {
            if (typeof userId !== "number" || typeof month !== "number" || typeof year !== "number") {
                throw new Error("Type of data for create box is invalid");
            }

            const currrentDateTime = new Date();

            const query = "SELECT * FROM nheejods_db.boxs b WHERE b.user_id = ? AND b.`month` = ? AND b.`year` = ?";
            const [result] = await dbContext.query(query, [userId, month, year, currrentDateTime, currrentDateTime]);

            return result[0] || null;
        } catch (err) {
            throw err;
        }
    }
    
    static async create(userId, month, year) {
        try {
            if (typeof userId !== "number" || typeof month !== "number" || typeof year !== "number") {
                throw new Error("Type of data for create box is invalid");
            }

            const currrentDateTime = new Date();

            const query = "INSERT INTO nheejods_db.boxs (user_id, `month`, `year`, created_at, updated_at) VALUES (?, ?, ?, ?, ?)";
            const [result] = await dbContext.query(query, [userId, month, year, currrentDateTime, currrentDateTime]);

            return result.insertId;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = BoxModel;