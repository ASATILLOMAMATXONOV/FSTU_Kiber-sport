const express = require("express");
const router = express.Router();
const db = require("../db");
const { handleCallbackQuery } = require("../telegram");

router.post("/", async (req, res) => {
	try {
		await handleCallbackQuery(req.body, db);
		res.send("✅ Callback muvaffaqiyatli bajarildi");
	} catch (err) {
		console.error("❌ Callback ishlov berishda xato:", err.message);
		res.status(500).send("❌ Server xatosi");
	}
});

module.exports = router;
