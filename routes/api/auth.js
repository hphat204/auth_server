const express = require("express");
const authHandler = require("../../controller/authController");
const router = express.Router();

router.post("/", authHandler);

module.exports = router;
