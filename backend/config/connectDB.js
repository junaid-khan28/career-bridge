const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://172.20.64.1:27017/career-bridge");
    console.log("Server is connected!");
  } catch (err) {
    console.error("Failed to connect mongoDB!");
    return; 
  }
};

module.exports = connectDB;
