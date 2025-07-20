import express from "express";
import connectDB from "./config/connectDB.js";

const app = express();
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})