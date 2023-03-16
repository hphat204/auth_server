const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connected to mongodb");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectDB;
