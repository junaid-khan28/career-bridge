const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
connectDB();

// import routes
const signRoutes = require("./routes/auth.routes");

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", signRoutes);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
