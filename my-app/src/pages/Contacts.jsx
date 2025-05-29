import React, { useState, useEffect } from "react";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		game: "",
		isTeam: false,
		teamName: "",
		teamMembers: "",
	});

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setVisible(true), 100);
	}, []);

	const handleChange = (e) => {
		const { name, type, checked, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submitted:", formData);
		alert("✅ Registration successful!");
		setFormData({
			name: "",
			email: "",
			phone: "",
			game: "",
			isTeam: false,
			teamName: "",
			teamMembers: "",
		});
	};

	return (
		<div style={pageStyle} id="contacts">
			<div
				style={{
					...formContainer,
					opacity: visible ? 1 : 0,
					transform: visible ? "translateY(0)" : "translateY(20px)",
					transition: "all 0.6s ease-out",
				}}
			>
				<h2 style={headingStyle}>🕹 Register for the CyberSport Game</h2>
				<p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
					Please fill in the form below:
				</p>

				<form onSubmit={handleSubmit} style={formStyle}>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						required
						style={inputStyle}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={formData.email}
						onChange={handleChange}
						required
						style={inputStyle}
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						value={formData.phone}
						onChange={handleChange}
						required
						style={inputStyle}
					/>

					<select
						name="game"
						value={formData.game}
						onChange={handleChange}
						required
						style={inputStyle}
					>
						<option value="">-- Select a Game --</option>
						<option value="CS2">CS2 (Counter-Strike 2)</option>
						<option value="Dota 2">Dota 2</option>
						<option value="FC25">FC25</option>
						<option value="Just Dance">FIJITAL Dance (Just Dance)</option>
					</select>

					<label style={{ color: "#ccc", fontSize: "0.95rem" }}>
						<input
							type="checkbox"
							name="isTeam"
							checked={formData.isTeam}
							onChange={handleChange}
							style={{ marginRight: "8px" }}
						/>
						I am registering as part of a team
					</label>

					{formData.isTeam && (
						<>
							<input
								type="text"
								name="teamName"
								placeholder="Team Name"
								value={formData.teamName}
								onChange={handleChange}
								required
								style={inputStyle}
							/>
							<textarea
								name="teamMembers"
								placeholder="Team members' names (separated by commas)"
								value={formData.teamMembers}
								onChange={handleChange}
								required
								rows="3"
								style={{ ...inputStyle, resize: "vertical" }}
							/>
						</>
					)}

					<button type="submit" style={buttonStyle}>
						🚀 Submit Registration
					</button>
				</form>
			</div>
		</div>
	);
};

// 💅 STYLES
const pageStyle = {
	backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://pic.rutubelist.ru/video/2024-09-29/84/a9/84a9b8438d51484a8f7ce079526264ee.jpg")`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	minHeight: "70vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "2rem",
};

const formContainer = {
	backgroundColor: "rgba(17,17,17,0.95)",
	padding: "2rem",
	borderRadius: "12px",
	maxWidth: "500px",
	width: "100%",
	boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
};

const headingStyle = {
	color: "#fff",
	marginBottom: "1rem",
	fontSize: "1.6rem",
	textAlign: "center",
};

const formStyle = {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
};

const inputStyle = {
	padding: "12px",
	borderRadius: "8px",
	border: "1px solid #444",
	backgroundColor: "#1a1a1a",
	color: "#fff",
	fontSize: "1rem",
	outline: "none",
	transition: "border 0.3s ease",
};

const buttonStyle = {
	padding: "12px",
	backgroundColor: "#ffc107",
	color: "#000",
	border: "none",
	borderRadius: "8px",
	fontSize: "1rem",
	fontWeight: "bold",
	cursor: "pointer",
	transition: "transform 0.2s ease, background-color 0.3s ease",
};

export default RegisterForm;
