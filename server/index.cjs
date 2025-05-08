
const express = require("express");
const connectDB = require("./config/db.cjs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();
app.listen(PORT, () => {
    console.log(`running at https://localhost:${PORT}`);
});