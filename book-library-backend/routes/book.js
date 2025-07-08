const express = require("express");
const bookModel = require("../models/book");
const AuthMiddleware = require("../middleware/auth");
const mybooksModel = require("../models/favorite-book");
const route = express.Router();

route.get("/books", async (req, res) => {
  const books = await bookModel.find();
  if (!books) {
    return res.status(404).json({
      message: "books not found",
    });
  }
  try {
    res.json({
      message: "books fetched successfully",
      books,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

route.get("/mybooks", AuthMiddleware, async (req, res) => {
  const user_id = req.id;
  const mybooks = await mybooksModel
    .find({ userId: user_id })
    .populate("bookId");
  if (!mybooks) {
    return res.status(404).json({
      message: "books not found add some books!",
    });
  }
  try {
    res.json({
      message: "books fetched successfully",
      mybooks,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

route.post("/mybooks/:bookId", AuthMiddleware, async (req, res) => {
  const book_id = req.params.bookId;
  const user_id = req.id;
  try {
    await mybooksModel.create({
      userId: user_id,
      bookId: book_id,
    });
    res.json({
      message: "book added successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

route.patch("/mybooks/:bookId/status", AuthMiddleware, async (req, res) => {
  const book_id = req.params.bookId;
  const { status } = req.body;
  if (!status) {
    return res.status(404).json({
      message: "missing field",
    });
  }
  try {
    let book = await mybooksModel.findByIdAndUpdate(book_id, {
      $set: { status: status },
    });
    await book.save();
    res.json({
      message: "status is updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

route.patch("/mybooks/:bookId/rating", AuthMiddleware, async (req, res) => {
  const book_id = req.params.bookId;
  const { rating } = req.body;
  if (!rating) {
    return res.status(404).json({
      message: "missing field",
    });
  }
  try {
    let book = await mybooksModel.findByIdAndUpdate(book_id, {
      $set: { rating: rating },
    });
    await book.save();
    res.json({
      message: "rating is updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = route;
