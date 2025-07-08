const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
const AuthMiddleware = require("../middleware/auth");

route.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(409).json({
      message: "user already exist",
    });
  }
  try {
    await bcrypt.hash(password, 3, async (err, hash) => {
      if (err) {
        return res.status(501).json({
          message: err,
        });
      }
      const newUser = new userModel({
        email,
        password: hash,
      });
      await newUser.save();
      res.json({
        message: "user register successfully",
      });
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "user not found please register",
    });
  }
  try {
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.KEY,
      {
        expiresIn: "1h",
      }
    );
    await bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(501).json({
          message: err,
        });
      }
      if (result) {
        res.json({
          message: "Login Successful.",
          token,
          email: user.email,
          id: user._id,
        });
      } else {
        res.status(401).json({ message: "invalid email or password" });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

route.get("/me", AuthMiddleware, async (req, res) => {
  const user_id = req.id;
  try {
    const user = await userModel.findOne({ _id: user_id });
    res.json({
      message: "user info fetched",
      info: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.post("/logout", AuthMiddleware, async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(404).json({ message: "valid token not found" });
  }
  try {
    const blacklist = new tokenModel({
      token,
    });
    await blacklist.save();
    res.json({
      message: "logout successful.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = route;
