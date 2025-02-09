require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/api", require("./middlewares/route.middleware"));

const PORT = process.env.PORT;
if (PORT) {
    app.listen(PORT, () => {
        console.log(`Server start at http://localhost:${PORT}`);
    }); 
} else {
    throw new Error("Server initialization failed. PORT not configured.")
}