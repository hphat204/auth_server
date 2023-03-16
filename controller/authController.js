const User = require("../model/user");
const Profile = require("../model/profile");
const bcrypt = require("bcrypt");

const authHandler = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "email and password are required" });
  }
  const foundUser = await User.findOne({ email });
  if (!foundUser) return res.status(401).json({ message: "wrong email or password" });
  try {
    const comparePassword = await bcrypt.compare(password, foundUser.password);
    if (comparePassword) {
      await Profile.create({
        email: email,
        userId: foundUser._id,
      });
      return res.status(200).json({ success: "login success", userId: foundUser._id });
    } else {
      return res.status(401).json({ message: "wrong email or password" });
    }
  } catch (error) {
    res.status(500);
  }
};

module.exports = authHandler;
