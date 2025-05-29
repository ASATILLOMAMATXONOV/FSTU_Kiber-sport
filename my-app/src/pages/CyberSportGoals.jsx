import React from "react";
import "./CyberSportGoals.css";

const CyberSportGoals = () => {
	const sections = [
		{
			icon: "🎓",
			title: "Development",
			description:
				"Supporting the growth of e-sports in Uzbekistan as a new form of competitive activity.",
		},
		{
			icon: "🏁",
			title: "Tournaments",
			description:
				"Organizing national and international e-sports events in Uzbekistan.",
		},
		{
			icon: "🏆",
			title: "International Relations",
			description:
				"Supporting Uzbekistan's participation in global e-sports competitions.",
		},
		{
			icon: "📁",
			title: "Regulations",
			description:
				"Developing requirements and standards for awarding sports titles and rankings.",
		},
		{
			icon: "🤝",
			title: "Cooperation",
			description:
				"Supporting clubs and institutions engaged in the development of e-sports.",
		},
		{
			icon: "🛎",
			title: "Events",
			description:
				"Holding forums, contests, seminars, and various public events.",
		},
	];

	return (
		<div id="goals" style={{ backgroundColor: "#000", padding: "2rem", color: "#fff", paddingTop: "4rem" }}>
			<h2 style={{ textAlign: "center", fontSize: "1.8rem", marginBottom: "2rem" }}>
				🎯 Goals of E-sports Development and Promotion
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
