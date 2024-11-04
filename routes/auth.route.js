const express = require("express");
const {
	register,
	login,
	verifyOtp,
	logout,
} = require("../controllers/auth.controller.js");

const {
	registerValidation,
	loginValidation,
} = require("../validators/users.validator.js");


const { otpValidation } = require("../validators/otp.validator.js");

const { tokenAuthentication } = require("../middlewares/auth.middleware.js");
const router = express.Router();

router.post(
	"/register",
	(req, res, next) => {
		const { error } = registerValidation(req.body);
		if (error) return res.status(400).json({ error: error.details[0].message });
		next();
	},
	register,
);

router.post(
	"/login",
	(req, res, next) => {
		const { error } = loginValidation(req.body);
		if (error) return res.status(400).json({ error: error.details[0].message });
		next();
	},
	login,
);

router.post(
    "/verify-otp",
    (req, res, next) => {
        const { error } = otpValidation(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    },
    verifyOtp
);


router.post("/logout", tokenAuthentication, logout);

module.exports = router;
