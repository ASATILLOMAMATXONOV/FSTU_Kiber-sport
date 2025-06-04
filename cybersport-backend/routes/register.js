const express = require("express");
const router = express.Router();
const db = require("../db");
const { notifyTelegram } = require("../telegram");

router.post("/", async (req, res) => {
  const { name, phone, game, isTeam, teamName, teamMembers } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO registrations (name, phone, game, is_team, team_name, team_members)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, phone, game, isTeam, teamName, teamMembers]
    );

    const savedUser = result.rows[0];
    await notifyTelegram(savedUser);

    res.status(200).json({ message: "✅ Ro‘yxatdan o‘tildi!", user: savedUser });
  } catch (err) {
    console.error("❌ Ro‘yxatdan o‘tishda xato:", err.message);
    res.status(500).json({ error: "Xatolik yuz berdi." });
  }
});

module.exports = router;
