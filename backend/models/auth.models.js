const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [/.+\@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
  },
});


const Sign = mongoose.model("Sign", signInSchema);
module.exports = Sign;
