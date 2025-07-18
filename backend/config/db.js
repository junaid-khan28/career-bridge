import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/career-bridge");
    console.log("MongoDB is connected!");
  } catch (_) {
    console.log("Failed to connect database!");
    process.exit(1);
  }
};


export default connectDB; 
