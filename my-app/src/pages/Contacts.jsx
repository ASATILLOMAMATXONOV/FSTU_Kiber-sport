import React, { useState, useEffect } from "react";

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		telegram: "", // ⬅️ yangi maydon
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
			// Jamoa a'zolari bo‘lsa, stringni massivga aylantirish
			const membersArray = formData.teamMembers
				? formData.teamMembers.split(",").map(m => m.trim())
				: [];
			//https://cybersport.fstu.uz/api/
			//http://192.168.10.118:3001/register
			const response = await fetch("https://cybersport.fstu.uz/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: formData.name,
					telegram: formData.telegram, 
					phone: formData.phone,
					game: formData.game,
					isTeam: formData.isTeam,
					teamName: formData.teamName,
					teamMembers: membersArray // massiv sifatida yuboriladi
				})
			});

			const data = await response.json();

			if (response.ok) {
				setConfirmationMessage("✅ Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!");
				setFormData({
					name: "",
					telegram: "",
					phone: "",
					game: "",
					isTeam: false,
					teamName: "",
					teamMembers: ""
				});
				// 5 soniyadan keyin xabarni yo'qotish
				setTimeout(() => setConfirmationMessage(""), 5000);
			} else {
				setConfirmationMessage("❌ Xatolik: " + (data.error || "Ma'lumot yuborilmadi"));
			}
		} catch (error) {
			console.error("❌ Serverga ulanishda xatolik:", error);
			setConfirmationMessage("❌ Serverga ulanishda xatolik");
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
					<input
						type="text"
						name="telegram"
						placeholder="Telegram username (masalan, @username)"
						value={formData.telegram}
						onChange={handleChange}
						required
						pattern="^@[\w\d_]{4,}$"
						title="Telegram username '@' belgisi bilan boshlanishi va kamida 5 ta belgidan iborat bo‘lishi kerak"
						style={inputStyle}
					/>

					<input
						type="tel"
						name="phone"
						placeholder="Telefon raqami +9989..."
						value={formData.phone}
						onChange={handleChange}
						required
						pattern="^\+998[0-9]{9}$"
						title="Telefon raqami +998 bilan boshlanishi va jami 13 ta raqam bo‘lishi kerak"
						style={inputStyle}
					/>

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
