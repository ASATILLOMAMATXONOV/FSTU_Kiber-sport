import React from "react";
import "./CyberSportGoals.css";

const CyberSportGoals = () => {
	const sections = [
		{
			icon: "🎓",
			title: "Rivojlanish",
			description:
				"O‘zbekistonda kibersportni raqobatbardosh faoliyatning yangi turi sifatida rivojlantirishni qo‘llab-quvvatlash.",
		},
		{
			icon: "🏁",
			title: "Turnirlar",
			description:
				"O‘zbekistonda milliy va xalqaro kibersport musobaqalarini tashkil etish.",
		},
		{
			icon: "🏆",
			title: "Xalqaro aloqalar",
			description:
				"O‘zbekistonning jahon kibersport musobaqalarida ishtirokini qo‘llab-quvvatlash.",
		},
		{
			icon: "📁",
			title: "Me'yoriy hujjatlar",
			description:
				"Sport unvonlari va darajalarini berish bo‘yicha talablar va standartlarni ishlab chiqish.",
		},
		{
			icon: "🤝",
			title: "Hamkorlik",
			description:
				"Kibersportni rivojlantirish bilan shug‘ullanayotgan klublar va muassasalarni qo‘llab-quvvatlash.",
		},
		{
			icon: "🛎",
			title: "Tadbirlar",
			description:
				"Forumlar, tanlovlar, seminarlar va turli ommaviy tadbirlarni o‘tkazish.",
		},
	];


	return (
		<div id="turlar" style={{ backgroundColor: "#000", padding: "2rem", color: "#fff", paddingTop: "4rem" }}>
			<h2 style={{ textAlign: "center", fontSize: "1.8rem", marginBottom: "2rem" }}>
				🎯 Kibersportni rivojlantirish va targ‘ib qilish maqsadlari
			</h2>

			<div className="cybersport-grid">
				{sections.map((section, idx) => (
					<div className="cybersport-card" key={idx}>
						<h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "#ffc107" }}>
							{section.icon} <span style={{ color: "#fff" }}>{section.title}</span>
						</h3>
						<p style={{ fontSize: "0.95rem", lineHeight: "1.5", color: "#ddd" }}>
							{section.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default CyberSportGoals;
