const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const app = express();
connectDB();

// import routes
const signRoutes = require("./routes/sign.routes");

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// routes
app.use("/", signRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
