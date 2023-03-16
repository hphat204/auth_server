const express = require("express");
const { getProfile, updateProfile } = require("../../controller/profileController");
const router = express.Router();

router.route("/:userId").get(getProfile).put(updateProfile);

module.exports = router;
