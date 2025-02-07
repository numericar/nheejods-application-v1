require("dotenv").config();
const express = require("express");

const app = express();

// middlewares
app.use(express.json());
app.use("/api", require("./middlewares/mapRoutes.middleware"));

const PORT = process.env.PORT;
if (PORT) {
    app.listen(PORT, () => {
        console.log(`Server start at http://localhost:${PORT}`);
    }); 
} else {
    throw new Error("Server initialization failed. PORT not configured.")
}