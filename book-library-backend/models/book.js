const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      min: [3, "must be includes 3 charecters"],
      required: true,
    },
    author: {
      type: String,
      min: [3, "must be includes 3 charecters"],
      required: true,
    },
    coverImage: {
      type: String,
      min: [3, "must be includes 3 charecters"],
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV41AIfZmRhpM1T77NrJpZt_8G1vAb5b6djg&s",
    },
    availability: {
      type: Boolean,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
