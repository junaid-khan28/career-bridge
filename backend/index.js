const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
connectDB();


// middlewares
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // Add your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// import routes 
const authRouter = require("./routes/auth.route");
const jobsRouter = require("./routes/jobs.route");


// mount it with route prefix 
app.use("/auth", authRouter);
app.use("/jobs", jobsRouter);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
