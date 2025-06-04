const TelegramBot = require("node-telegram-bot-api");
const ExcelJS = require("exceljs");
const fs = require("fs");
require("dotenv").config();
const db = require("./db");

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.setMyCommands([
  { command: "/menu", description: "Asosiy menyuni ko‘rsatish" }
]);

bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "📋 Asosiy menyu:", {
    reply_markup: {
      keyboard: [
        [{ text: "📄 Foydalanuvchilar ma’lumoti" }],
        [{ text: "ℹ️ Ma'lumot" }]
      ],
      resize_keyboard: true
    }
  });
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "📄 Foydalanuvchilar ma’lumoti") {
    try {
      const result = await db.query("SELECT * FROM registrations");
      const users = result.rows;

      if (!users.length) {
        return bot.sendMessage(chatId, "⛔ Hech qanday ro‘yxat topilmadi.");
      }

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Registratsiyalar");

      worksheet.columns = [
        { header: "ID", key: "id", width: 10 },
        { header: "Ism", key: "name", width: 20 },
        { header: "Telefon", key: "phone", width: 20 },
        { header: "O‘yini", key: "game", width: 20 },
        { header: "Jamoa", key: "is_team", width: 10 },
        { header: "Jamoa nomi", key: "team_name", width: 20 },
        { header: "A’zolar", key: "team_members", width: 30 }
      ];

      users.forEach(user => worksheet.addRow(user));

      const fileName = `users_${Date.now()}.xlsx`;
      await workbook.xlsx.writeFile(fileName);
      await bot.sendDocument(chatId, fs.createReadStream(fileName));
      fs.unlinkSync(fileName);
    } catch (err) {
      console.error("❌ Excel yuborishda xato:", err);
      bot.sendMessage(chatId, "Xatolik yuz berdi: " + err.message);
    }
  }

  if (text === "ℹ️ Ma'lumot") {
    bot.sendMessage(chatId, "Bu bot orqali ro‘yxatga olinishingiz mumkin.");
  }
});

// ✅ Ro‘yxatdan o‘tganlarni Telegramga yuboruvchi funksiya
async function notifyTelegram(data) {
  const message = `
🆕 *Yangi ro‘yxat!*
👤 Ism: ${data.name}
🎮 O‘yin: ${data.game}
👥 Jamoa: ${data.is_team ? "Ha" : "Yo‘q"}
🏷 Jamoa nomi: ${data.team_name || "-"}
👤 A'zolar: ${data.team_members || "-"}
📞 Tel: ${data.phone}
  `;

  try {
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: "Markdown"
    });
  } catch (err) {
    console.error("❌ Telegramga yuborishda xato:", err.message);
  }
}

module.exports = {
  notifyTelegram
};
