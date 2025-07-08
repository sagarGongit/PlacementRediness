const mongoose = require("mongoose");
const DB_Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection established with db successfully`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = DB_Connection;
