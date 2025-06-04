const express = require("express");
const router = express.Router();
const { handleCallbackQuery } = require("../telegram");
const db = require("../db");

router.post("/", async (req, res) => {
  try {
    await handleCallbackQuery(req.body, db);
    res.status(200).json({ message: "Javob qayta ishlov berildi" });
  } catch (err) {
    console.error("❌ Approve route xatosi:", err.message);
    res.status(500).json({ error: "Callback query xatosi" });
  }
});

module.exports = router;
