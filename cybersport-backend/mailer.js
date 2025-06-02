const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

async function sendConfirmationEmail(email, name, status) {
	const subject = status === "approved" ? "✅ Ro‘yxat tasdiqlandi" : "❌ Ro‘yxat rad etildi";
	const text =
		status === "approved"
			? `Assalomu alaykum, ${name}!\n\nSiz FSTU KIBERSPORT musobaqasi uchun yuborgan arizangiz qabul qilindi va tasdiqlandi.`
			: `Assalomu alaykum, ${name}!\n\nSiz FSTU KIBERSPORT musobaqasi uchun yuborgan arizangiz rad etildi. Rahmat!`;

	await transporter.sendMail({
		from: process.env.EMAIL_USER,
		to: email,
		subject,
		text,
	});
}

module.exports = sendConfirmationEmail;
