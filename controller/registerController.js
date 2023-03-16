const User = require("../model/user");
const bcrypt = require("bcrypt");
const handleRegister = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "email and password are required" });
  }
  const duplicatedEmail = await User.findOne({ email }).exec();
  if (duplicatedEmail) return res.status(409).json({ message: "email had been used" });
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      email: email,
      password: hashPassword,
    });
    res.status(201).json({ success: "new user Created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = handleRegister;
