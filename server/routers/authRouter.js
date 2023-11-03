const express = require("express");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const {handleLogin, attemptLogin, registerUsers, logout} = require("../controllers/authController");
const { rateLimiter } = require("../controllers/rateLimiter");

router.route("/login")
.get(handleLogin)
.post(validateForm,rateLimiter(60,10),attemptLogin)

router.route("/register")
.post(validateForm,rateLimiter(30,4),registerUsers)

router.route("/logout").get(logout);

module.exports = router;