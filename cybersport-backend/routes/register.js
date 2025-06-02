const express = require("express");
const router = express.Router();
const db = require("../db");
const { notifyTelegram } = require("../telegram");

// routes/register.js
router.post("/", async (req, res) => {
	const { name, email, phone, game, isTeam, teamName, teamMembers } = req.body;
	console.log("Received registration data:", req.body);

	try {
		const result = await db.query(
			`INSERT INTO registrations (name, email, phone, game, is_team, team_name, team_members)
			 VALUES ($1, $2, $3, $4, $5, $6, $7)
			 RETURNING *`,
			[
				name,
				email,
				phone,
				game,
				isTeam,
				isTeam ? teamName : null,
				isTeam ? teamMembers : null,
			]
		);

		const inserted = result.rows[0];
		await notifyTelegram(inserted); // ✅ to‘g‘ri chaqiruv

		res.status(201).json({ message: "Ro‘yxat olindi va adminga yuborildi." });
	} catch (err) {
		console.log("Server xatosi:", err);
		res.status(500).json({ error: err.message });
	}
});


module.exports = router;
