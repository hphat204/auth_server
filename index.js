const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const app = express();

dotenv.config();

const PORT = 3500;

app.use(cors());
app.use(express.json());
app.use("/login", require("./routes/api/auth"));
app.use("/register", require("./routes/api/register"));
app.use("/profile", require("./routes/api/profile"));

const startServer = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`server Start on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
