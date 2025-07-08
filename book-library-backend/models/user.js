const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
