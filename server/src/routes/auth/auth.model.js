const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    password: { type: String },
    token: { type: String },
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
