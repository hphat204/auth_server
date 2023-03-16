const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: "",
  },
  dayOfBirth: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    default: "",
  },
  userId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Profiles", profileSchema);
