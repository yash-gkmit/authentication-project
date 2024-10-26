const express = require("express");
const {
	getDetails
} = require("../controllers/users.controller.js");

const { tokenAuthentication } = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.get("/:id", tokenAuthentication, getDetails);

module.exports = router;
