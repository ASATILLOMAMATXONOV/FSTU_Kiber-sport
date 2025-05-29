import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";


const backgroundImages = [
	"https://steamuserimages-a.akamaihd.net/ugc/921434607320298427/D44C16D493BCB5C1198CC165966E5E659CD70563/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
	"https://steamuserimages-a.akamaihd.net/ugc/425941828286838910/CC2FE4A28AD2E260283114E1901DD84C8A8E6890/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
	"https://img2.joyreactor.cc/pics/post/-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-963624.gif",
	"https://steamuserimages-a.akamaihd.net/ugc/448484014572851122/77656E66F68EDEE762D2C1E147E8ED74B4DFE0D1/?imw=5000&amp;imh=5000&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false",
];

const HomePage = () => {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			goToNextImage();
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const goToNextImage = () => {
		setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
	};

	const getNextImageIndex = () => {
		return (currentImage + 1) % backgroundImages.length;
	};

	return (
		<motion.div id="home"
			className="slider-wrapper"
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			style={{ position: "relative" }}
		>
			<AnimatePresence mode="wait">
				<motion.img
					key={backgroundImages[currentImage]}
					src={backgroundImages[currentImage]}
					alt="slider"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					className="slider-img fullscreen"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100vh",
						objectFit: "cover",
						zIndex: 0,
					}}
				/>
			</AnimatePresence>

			<div className="overlay">
				<Navbar />
				<Box
					className="main-text"
					sx={{
						display: { xs: "none", md: "block" }, // 👉 faqat md va undan katta ekranda ko‘rinadi
						position: "absolute",
						top: "72%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						color: "white",
						textAlign: "center",
						zIndex: 10,
						padding: "20px",
						maxWidth: "80%",
						borderRadius: "10px",
						animation: "glowingBorder 2s infinite ease-in-out",
						border: "2px solid #ffc107",
						overflow: "hidden",
					}}
				>
					<Typography
						component="h1"
						sx={{
							fontSize: { md: "2rem", lg: "2.4rem" },
							fontWeight: "bold",
							color: "#fff",
							textAlign: "center",
							lineHeight: 1.3,
							zIndex: 10,
						}}
					>
						Participation in the <br /> FSTU CYBERSPORT  <br />competition
					</Typography>

					<div className="scroll-indicator">⬇</div>
				</Box>




				{/* Keyingi rasm preview */}
				<div
					style={{
						position: "absolute",
						bottom: "5px",
						right: "5px",
						width: "120px",
						height: "70px",
						borderRadius: "8px",
						overflow: "hidden",
						cursor: "pointer",
						zIndex: 11,
						boxShadow: "0 0 10px rgba(0,0,0,0.5)",
					}}
					onClick={goToNextImage}
					title="Keyingi slaydga o‘tish"
				>
					<img
						src={backgroundImages[getNextImageIndex()]}
						alt="Next preview"
						style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.3s" }}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
