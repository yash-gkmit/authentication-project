const User = require("../models/users.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const otpService = require("./otps.service.js");

const jwt_secret = process.env.JWT_SECRET || "yashgupta";
const jwt_expireIn = process.env.JWT_EXPIRESIN || "2h";

async function registerUser({ username, email, password }) {
	const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    await otpService.generateAndSendOtp(email);
}

async function loginUser({ email, password }) {
	const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error("Invalid credentials");

    const token = jwt.sign(
		{ username: user.username, email: user.email },
		jwt_secret,
		{ expiresIn: jwt_expireIn },
	);
	return { token };

    await otpService.generateAndSendOtp(email);

}

async function verifyOtpAndGenerateToken({ email, otp }) {
    await otpService.verifyOtp(email, otp);

    const user = await User.findOne({ email });
    const token = jwt.sign(
    	{ username: user.username, email: user.email },
    	jwt_secret, 
    	{ expiresIn: jwt_expireIn }
    );
    return { token };
}

module.exports = {
	registerUser,
	loginUser,
	verifyOtpAndGenerateToken,
};
