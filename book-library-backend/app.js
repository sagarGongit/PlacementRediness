require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const DB_Connection = require("./config/db");
const userRoute = require("./routes/user");
const bookRoute = require("./routes/book");

const server = express();

const PORT = process.env.PORT || 3002;

server.use(express.json());
server.use(cors({ origin: "*" }));
server.use(helmet());

server.use("/api/auth", userRoute);
server.use("/api", bookRoute);

server.get("/", (req, res) => {
  res.json({
    message: `server running on port ${PORT}`,
  });
});

server.listen(PORT, () => {
  DB_Connection();
  console.log(`your server is live on http://localhost:${PORT}`);
});
