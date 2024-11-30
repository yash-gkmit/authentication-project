const Otp = require("../models/otps.model.js");
const crypto = require("crypto");
const emailService = require("../utils/email.js");

async function generateAndSendOtp(email) {
    const otp = crypto.randomInt(100000, 999999).toString();
    const expiresAt = new Date(Date.now() + 1 * 60 * 1000); 

    await Otp.create({ email, otp, expiresAt });
    await emailService.sendOtpEmail(email, otp);
}

async function verifyOtp(email, otp) {
    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord) throw new Error("Invalid or expired OTP");

    await Otp.deleteOne({ email, otp });
}

module.exports = { generateAndSendOtp, verifyOtp };
