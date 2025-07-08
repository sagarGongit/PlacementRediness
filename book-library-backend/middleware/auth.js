const jwt = require("jsonwebtoken");
const tokenModel = require("../models/token");

const AuthMiddleware = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "token is missing provide token",
    });
  }
  const expired = await tokenModel.findOne({ token });
  if (expired) {
    return res.status(401).json({
      message: "expired token please login",
    });
  }

  try {
    jwt.verify(token, process.env.KEY, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          message: err,
        });
      }
      req.email = decoded.email;
      req.id = decoded.id;

      next();
    });
  } catch (error) {
    res.status(500).json({
      message: error.messsage,
    });
  }
};

module.exports = AuthMiddleware;
