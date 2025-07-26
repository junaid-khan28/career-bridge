const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
connectDB();

// import routes
const signRoutes = require("./routes/sign.routes");

// middlewares
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true // Allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", signRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
