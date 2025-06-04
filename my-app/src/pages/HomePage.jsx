import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import video1 from "../assets/dota_montage_webm.webm";
import video2 from "../assets/CS2.mp4";
import video3 from "../assets/FC25.mp4";
import Countdown from "../components/Countdown";

const videoList = [video1, video2, video3];

const HomePage = () => {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentVideoIndex((prev) => (prev + 1) % videoList.length);
		}, 10000); // 7 sekundda almashadi
		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			id="home"
			className="slider-wrapper"
			initial={{ opacity: 0, scale: 0.98 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			style={{ position: "relative", overflow: "hidden" }}
		>
			{/* 🎬 Background video */}
			<video
				src={videoList[currentVideoIndex]}
				autoPlay
				muted
				loop
				playsInline
				style={{
					position: "absolute",
					width: "100%",
					height: "100vh",
					objectFit: "cover",
					top: 0,
					left: 0,
					zIndex: 0,
				}}
			/>

			{/* 🔳 Overlay content */}
			<div className="overlay">
				<Navbar />
				<Box
					className="main-text"
					sx={{
						display: { xs: "none", md: "block" },
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
						<h2>
						<Countdown targetDate="2025-06-09T00:00:00" /> 
						</h2>
					</Typography>

					<div className="scroll-indicator">⬇</div>
				</Box>
			</div>
		</motion.div>
	);
};

export default HomePage;
