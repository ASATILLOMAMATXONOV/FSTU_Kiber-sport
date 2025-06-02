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
	const [confirmationMessage, setConfirmationMessage] = useState("");

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3001/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setConfirmationMessage("✅ Ro‘yxat qabul qilindi. Javob elektron pochtangizga yuboriladi.");
				setFormData({
					name: "",
					email: "",
					phone: "",
					game: "",
					isTeam: false,
					teamName: "",
					teamMembers: "",
				});

				// 5 soniyadan keyin xabarni yo'qotish
				setTimeout(() => setConfirmationMessage(""), 5000);
			} else {
				setConfirmationMessage("❌ Xatolik yuz berdi. Qayta urinib ko‘ring.");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setConfirmationMessage("❌ Server bilan bog‘lanishda muammo.");
		}
	};

	return (
		<div style={pageStyle} id="aloqa">
			<div
				style={{
					...formContainer,
					opacity: visible ? 1 : 0,
					transform: visible ? "translateY(0)" : "translateY(20px)",
					transition: "all 0.6s ease-out",
				}}
			>
				<h2 style={headingStyle}>🕹 Kibersport o‘yini uchun ro‘yxatdan o‘ting</h2>
				<p style={{ color: "#ccc", marginBottom: "1.5rem" }}>
					Iltimos, quyidagi formani to‘ldiring:
				</p>

				<form onSubmit={handleSubmit} style={formStyle}>
					<input type="text" name="name" placeholder="Ismingiz" value={formData.name} onChange={handleChange} required style={inputStyle} />
					<input type="email" name="email" placeholder="Elektron pochta manzili" value={formData.email} onChange={handleChange} required style={inputStyle} />
					<input type="tel" name="phone" placeholder="Telefon raqami" value={formData.phone} onChange={handleChange} required style={inputStyle} />

					<select name="game" value={formData.game} onChange={handleChange} required style={inputStyle}>
						<option value="">-- O‘yin turini tanlang --</option>
						<option value="CS2">CS2 (Counter-Strike 2)</option>
						<option value="Dota 2">Dota 2</option>
						<option value="FC25">FC25</option>
						<option value="Just Dance">FIJITAL Raqs (Just Dance)</option>
					</select>

					<label style={{ color: "#ccc", fontSize: "0.95rem" }}>
						<input type="checkbox" name="isTeam" checked={formData.isTeam} onChange={handleChange} style={{ marginRight: "8px" }} />
						Men jamoa tarkibida ro‘yxatdan o‘tyapman
					</label>

					{formData.isTeam && (
						<>
							<input type="text" name="teamName" placeholder="Jamoa nomi" value={formData.teamName} onChange={handleChange} required style={inputStyle} />
							<textarea name="teamMembers" placeholder="Jamoa a'zolari (vergul bilan)" value={formData.teamMembers} onChange={handleChange} required rows="3" style={{ ...inputStyle, resize: "vertical" }} />
						</>
					)}

					<button type="submit" style={buttonStyle}>
						🚀 Ro‘yxatni yuborish
					</button>

					{confirmationMessage && (
						<div style={confirmationStyle}>
							{confirmationMessage}
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

// 🎨 STYLELAR
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
	border: "2px solid #444",
	backgroundColor: "#1a1a1a",
	color: "#fff",
	fontSize: "1rem",
	outline: "none",
	transition: "border 0.4s ease-in-out",
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

const confirmationStyle = {
	marginTop: "1rem",
	padding: "12px",
	border: "2px solid #ffc107",
	borderRadius: "8px",
	backgroundColor: "#1a1a1a",
	color: "#ffc107",
	textAlign: "center",
	fontWeight: "bold",
	animation: "pulseBorder 1s ease-in-out infinite alternate",
};

// ✨ Animatsiya qo‘shish uchun CSS qo‘shing
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes pulseBorder {
	0% { border-color: #ffc107; }
	100% { border-color: #fff700; }
}
`;
document.head.appendChild(styleSheet);

export default RegisterForm;
