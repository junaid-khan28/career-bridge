const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/career-bridge");
    console.log("Server is connected!");
  } catch (err) {
    console.error("Failed to connect mongoDB!");
    return;
  }
};

module.exports = connectDB;
