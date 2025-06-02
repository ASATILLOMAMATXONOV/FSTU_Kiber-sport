const axios = require("axios");
require("dotenv").config();
const sendConfirmationEmail = require("./mailer");

async function notifyTelegram(data) {
	const message = `
🆕 *Yangi ro‘yxat!*
👤 Ism: ${data.name}
📧 Email: ${data.email}
📱 Tel: ${data.phone}
🎮 O‘yin: ${data.game}
👥 Jamoa: ${data.is_team ? "Ha" : "Yo‘q"}
`;

	try {
		await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
			chat_id: process.env.TELEGRAM_CHAT_ID,
			text: message,
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "✅ Tasdiqlash", callback_data: `approve_${data.id}` },
						{ text: "❌ Rad etish", callback_data: `reject_${data.id}` }
					]
				]
			}
		});
	} catch (error) {
		console.error("❌ Telegramga yuborishda xato:", error.message);
	}
}

async function handleCallbackQuery(body, db) {
	const callback = body.callback_query;
	const message = callback.message;
	const chatId = message.chat.id;
	const data = callback.data;
	const [action, id] = data.split("_");

	try {
		const result = await db.query("SELECT * FROM registrations WHERE id = $1", [id]);
		if (result.rows.length === 0) return;

		const user = result.rows[0];
		if (action === "approve") {
	await db.query("UPDATE registrations SET is_approved = true WHERE id = $1", [id]);
	await sendConfirmationEmail(user.email, user.name, "approved"); // ✅ email yuboriladi
	await answerBot(chatId, `✅ *${user.name}* tasdiqlandi va email yuborildi.`);
} else if (action === "reject") {
	await db.query("DELETE FROM registrations WHERE id = $1", [id]);
	await sendConfirmationEmail(user.email, user.name, "rejected"); // ❌ email yuboriladi
	await answerBot(chatId, `❌ *${user.name}* rad etildi va email yuborildi.`);
}

	} catch (err) {
		console.error("❌ Callback query xatosi:", err.message);
	}
}

async function answerBot(chatId, text) {
	await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
		chat_id: chatId,
		text,
		parse_mode: "Markdown"
	});
}

module.exports = {
	notifyTelegram,
	handleCallbackQuery
};