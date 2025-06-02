const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./db");
const { notifyTelegram, handleCallbackQuery } = require("./telegram");
const registerRoute = require("./routes/register");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// DB ulanishi
async function connectDB() {
	try {
		await pool.connect();
		console.log("✅ Ma'lumotlar bazasi bilan bog'landi");
		return pool;
	} catch (err) {
		console.error("❌ Ma'lumotlar bazasi bilan bog'lanishda xato:", err.message);
		process.exit(1);
	}
}
connectDB();

// Ro‘yxatdan o‘tkazish route
app.use("/register", registerRoute);

// Telegram callbacklarni qabul qilish
app.post("/webhook", express.json(), async (req, res) => {
	await handleCallbackQuery(req.body, pool);
	res.sendStatus(200);
});
// Serverni ishga tushirish
app.listen(process.env.PORT || 3001, () => {
	console.log("✅ Server ishlayapti");
});