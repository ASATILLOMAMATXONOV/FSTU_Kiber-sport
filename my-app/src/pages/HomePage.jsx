import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";

const backgroundImages = [
	"https://cdn.vectorstock.com/i/500p/38/32/dark-blue-digital-technology-banner-gradient-web-vector-54003832.jpg",
	"https://img.freepik.com/free-vector/futuristic-digital-web-technology-background-design-vector_1017-46015.jpg?semt=ais_items_boosted&w=740",
	"https://img.freepik.com/free-vector/blue-technology-banner-with-connection-mesh-lights-streak_1017-34377.jpg",
];

const HomePage = () => {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
		}, 10000); // 10 soniyadan keyin o‘zgaradi
		return () => clearInterval(interval);
	}, []);


	return (
		<div className="slider-wrapper">
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
				/>
			</AnimatePresence>

			<div className="overlay">
				<Navbar />
				<Box
					className="main-text"
					sx={{
						position: "absolute",
						backgroundColor: "rgba(0, 0, 0, 0.6)",// fixed emas, chunki parent ichida
						top: "70%",
						left: "50%",
						borderRadius: "10px",
						transform: "translate(-50%, -50%)",  // markazga joylashtiradi
						color: "white",
						textAlign: "center",
						zIndex: 10,
						padding: "20px",
						maxWidth: "80%",	
					}}
				>
					<h1>
						Массовое движение,<br />объединяющее миллионы людей
					</h1>
					<div className="scroll-indicator">⬇</div>
				</Box>
			</div>
		</div>
	);
};

export default HomePage;
