const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    },
});

async function sendOtpEmail(email, otp) {
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}. It will expire in 5 minutes.`
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendOtpEmail };
