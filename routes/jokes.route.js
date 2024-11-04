const express = require("express");
const {
	fetchpublicAPI
} = require("../controllers/jokes.controller.js");

const { tokenAuthentication } = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.get("/publicapi", tokenAuthentication, fetchpublicAPI);

module.exports = router;