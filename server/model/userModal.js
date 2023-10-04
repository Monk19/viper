const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", userSchema);
