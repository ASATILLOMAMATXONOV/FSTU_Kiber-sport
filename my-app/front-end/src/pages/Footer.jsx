import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube, Telegram } from "@mui/icons-material";


const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				background: "linear-gradient(-45deg, #111, #222, #111, #000)",
				backgroundSize: "400% 400%",
				animation: "gradientMove 10s ease infinite",
				color: "#fff",
				py: 4,
				px: { xs: 2, md: 6 },
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Logo yoki nom */}
			<Typography variant="h6" sx={{ fontWeight: "bold", color: "#f7c600" }}>
				FSTU CYBERSPORT
			</Typography>

			{/* Tezkor havolalar */}
			<Box sx={{ display: "flex", gap: 3, mt: { xs: 2, md: 0 } }}>
				<Link href="#home" underline="none" color="#ccc" sx={{ "&:hover": { color: "#f7c600" } }}>
					Bosh sahifa
				</Link>
				<Link href="#haqida" underline="none" color="#ccc" sx={{ "&:hover": { color: "#f7c600" } }}>
					Haqida
				</Link>
				<Link href="#turlar" underline="none" color="#ccc" sx={{ "&:hover": { color: "#f7c600" } }}>
					Turlar
				</Link>
				<Link href="#aloqa" underline="none" color="#ccc" sx={{ "&:hover": { color: "#f7c600" } }}>
					Aloqa
				</Link>
			</Box>

			{/* Ijtimoiy tarmoqlar */}
			<Box sx={{ mt: { xs: 3, md: 0 }, display: "flex", gap: 2 }}>
				<IconButton href="#" target="_blank" sx={{ color: "#f7c600" }}>
					<Facebook />
				</IconButton>
				<IconButton href="#" target="_blank" sx={{ color: "#f7c600" }}>
					<Instagram />
				</IconButton>
				<IconButton href="#" target="_blank" sx={{ color: "#f7c600" }}>
					<YouTube />
				</IconButton>
				<IconButton href="#" target="_blank" sx={{ color: "#f7c600" }}>
					<Telegram />
				</IconButton>
			</Box>

			{/* Pastki yozuv */}
			<Box sx={{ width: "100%", mt: 3, textAlign: "center", fontSize: "0.85rem", color: "#bbb" }}>
				© {new Date().getFullYear()} Fergana State Technical University. Barcha huquqlar himoyalangan.
			</Box>

			{/* Footer uchun animatsiya stilini qo‘shish */}
			<style>{`
				@keyframes gradientMove {
					0% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
					100% { background-position: 0% 50%; }
				}
			`}</style>
		</Box>
	);
};

export default Footer;


