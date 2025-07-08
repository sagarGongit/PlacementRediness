const mongoose = require("mongoose");

const mybooksSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    status: {
      type: String,
      enum: {
        values: ["Want to Read", "Currently Reading", "Read"],
        message: "invalid value",
      },
      default: "Want to Read",
    },
    rating: {
      type: Number,
      min: [0, "rating must be +ve "],
      max: [5, "rating must between 0-5"],
      default: 1,
    },
  },
  { versionKey: false, timestamps: true }
);

const mybooksModel = mongoose.model("MyBook", mybooksSchema);

module.exports = mybooksModel;
