const express = require("express");
const {
	register,
	login,
	logout,
	activeUser,
	fetchpublicAPI,
} = require("../controllers/auth.controller.js");

const { tokenAuthentication } = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", tokenAuthentication, logout);
router.get("/active", tokenAuthentication, activeUser);
router.get("/publicapi", tokenAuthentication, fetchpublicAPI);

module.exports = router;
