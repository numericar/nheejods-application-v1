const dbContext = require("../utils/dbContext");

class UserModel {
    static async findByEmail(email) {
        try {
            if (typeof email !== "string") throw new Error("Email should be type string");

            const [rows] = await dbContext.query("SELECT * FROM nheejods_db.users u WHERE u.email = ?", [email]);

            return rows[0] || null;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async create(user) {
        try {
            if (typeof user === "undefined" || typeof user.email === "undefined" || typeof user.password === "undefined") {
                throw new Error("User is invalid");
            }

            const currrentDateTime = new Date();

            const query = "INSERT INTO nheejods_db.users (email ,password ,created_at ,updated_at) VALUES (?, ?, ?, ?)";
            const [result] = await dbContext.query(query, [user.email, user.password, currrentDateTime, currrentDateTime]);

            return result.insertId;

        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async findPasswordHashByEmail(email) {
        try {
            if (typeof email !== "string") throw new Error("Email should be type string");

            const [rows] = await dbContext.query("SELECT u.password FROM nheejods_db.users u WHERE u.email = ?", [email]);

            return rows[0].password || null;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async findUserIdByEmail(email) {
        try {
            if (typeof email !== "string") throw new Error("Email should be type string");

            const [rows] = await dbContext.query("SELECT u.user_id FROM nheejods_db.users u WHERE u.email = ?", [email]);

            return rows[0].user_id || null;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = UserModel;