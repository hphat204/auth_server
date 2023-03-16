const Profile = require("../model/profile");
const getProfile = async (req, res) => {
  const userId = req.params.userId;
  try {
    const findUserProfile = await Profile.findOne({ userId });
    if (findUserProfile) {
      res.status(200).json(findUserProfile);
    }
  } catch (error) {
    res.status(404).json({ message: "user profile not found" });
  }
};

const updateProfile = async (req, res) => {
  const userId = req.params.userId;
  const { fullName, dayOfBirth, email, phone } = req.body;
  try {
    let userProfile = await Profile.findOne({ userId }).exec();
    if (!userProfile) return;
    if (req.body?.fullName) userProfile.fullName = fullName;
    if (req.body?.dayOfBirth) userProfile.dayOfBirth = dayOfBirth;
    if (req.body?.email) userProfile.email = email;
    if (req.body?.phone) userProfile.phone = phone;
    await userProfile.save();
    res.status(200).json({ success: "user update" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile, updateProfile };
