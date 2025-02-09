const dbContext = require("../utils/dbContext");

class BoxModel {
    static async findByUMY(userId, month, year) {
        try {
            if (typeof userId !== "number" || typeof month !== "number" || typeof year !== "number") {
                throw new Error("Type of data for find box is invalid");
            }

            const query = "SELECT b.user_id AS userId, b.`month`, b.`year` FROM nheejods_db.boxs b WHERE b.user_id = ? AND b.`month` = ? AND b.`year` = ?";
            const [result] = await dbContext.query(query, [userId, month, year]);

            return result[0] || null;
        } catch (err) {
            throw err;
        }
    }

    static async findById(boxId) {
        try {
            if (typeof boxId !== "number") {
                throw new Error("Type of data for find box is invalid");
            }

            const query = "SELECT b.user_id AS userId, b.`month`, b.`year` FROM nheejods_db.boxs b WHERE b.box_id = ?";
            const [result] = await dbContext.query(query, [boxId]);

            return result[0] || null;
        } catch (err) {
            throw err;
        }
    }

    static async findByUserId(userId, year, month) {
        try {
            if (typeof userId !== "number") {
                throw new Error("Type of data for find boxs is invalid");
            }

            let params = [userId];

            let query = "SELECT b.box_id as boxId, b.`year`, b.`month` FROM nheejods_db.boxs b WHERE b.user_id = ?"
            if (typeof year !== "undefined") {
                query += " AND b.`year` = ?";
                params.push(Number(year));
            }
            if (typeof month !== "undefined") {
                query += " AND b.`month` = ?";
                params.push(Number(month));
            }

            const [rows] = await dbContext.query(query, params);

            return rows;
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