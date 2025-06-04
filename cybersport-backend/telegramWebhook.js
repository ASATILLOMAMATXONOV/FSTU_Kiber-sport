const axios = require("axios");
const db = require("./db");
require("dotenv").config();
const { sendUserListToAdmin } = require("./telegram");

async function handleUserMessage(body) {
	const msg = body.message;
	const chatId = msg.chat.id;
	const username = msg.from.username;
	const text = msg.text;

	// chat_id va username saqlash
	if (username) {
		await db.query(
			`INSERT INTO user_chats (username, chat_id)
			 VALUES ($1, $2)
			 ON CONFLICT (username) DO UPDATE SET chat_id = EXCLUDED.chat_id`,
			[`@${username}`, chatId]
		);
	}

	// /menu komandasi
	if (text === "/menu") {
		await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
			chat_id: chatId,
			text: "📋 *Bot menyusi:*",
			parse_mode: "Markdown",
			reply_markup: {
				inline_keyboard: [
					[
						{ text: "📤 Excelda barcha foydalanuvchilar", callback_data: "export_users" }
					]
				]
			}
		});
	}
}
