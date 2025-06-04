import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	IconButton,
	Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// Menyu elementlari
const menuItems = [
	{ text: "BOSH SAHIFA", id: "home" },
	{ text: "HAQIDA", id: "haqida" },
	{ text: "TURLAR", id: "turlar" },
	{ text: "ALOQA", id: "aloqa" },
];

const Navbar = () => {
	const [portlashBoshlansin, setPortlashBoshlansin] = useState(false);
	const [navbarChiqarilsin, setNavbarChiqarilsin] = useState(false);
	const [mobilMenyu, setMobilMenyu] = useState(false);

	const menyuniAlmashtirish = () => setMobilMenyu(!mobilMenyu);

	useEffect(() => {
		const vaqt1 = setTimeout(() => setPortlashBoshlansin(true), 600);
		const vaqt2 = setTimeout(() => setNavbarChiqarilsin(true), 1100);
		return () => {
			clearTimeout(vaqt1);
			clearTimeout(vaqt2);
		};
	}, []);

	return (
		<Box sx={{ position: "relative", zIndex: 1200 }}>
			{/* === O‘QLAR === */}
			<AnimatePresence>
				{!portlashBoshlansin && (
					<>
						{/* Chap tomondan o‘q */}
						<motion.div
							initial={{ x: "-100%" }}
							animate={{ x: "50vw" }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							style={{
								position: "fixed",
								top: "28px",
								left: 0,
								width: "80px",
								height: "12px",
								backgroundColor: "#f7c600",
								clipPath: "polygon(0 50%, 60% 0, 60% 30%, 100% 30%, 100% 70%, 60% 70%, 60% 100%)",
								boxShadow: "0 0 12px #f7c600",
								zIndex: 999,
							}}
						/>

						{/* O‘ng tomondan o‘q */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: "-50vw" }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							style={{
								position: "fixed",
								top: "28px",
								right: 0,
								width: "80px",
								height: "12px",
								backgroundColor: "#f7c600",
								clipPath: "polygon(100% 50%, 40% 0, 40% 30%, 0% 30%, 0% 70%, 40% 70%, 40% 100%)",
								boxShadow: "0 0 12px #f7c600",
								zIndex: 999,
							}}
						/>
					</>
				)}
			</AnimatePresence>

			{/* === PORTLASH === */}
			<AnimatePresence>
				{portlashBoshlansin && !navbarChiqarilsin && (
					<motion.div
						initial={{ scale: 0, opacity: 1 }}
						animate={{ scale: 1.4, opacity: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							width: "100vw",
							height: "100vh",
							background: "radial-gradient(circle at center, #fff500, #ff6600, #000000)",
							boxShadow: "0 0 100px 60px #ff6a00",
							zIndex: 1100,
							pointerEvents: "none",
						}}
					/>
				)}
			</AnimatePresence>

			{/* === NAVBAR CHIQISHI === */}
			{navbarChiqarilsin && (
				<motion.nav
					initial={{ y: -80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "64px",
						backgroundColor: "rgba(0, 0, 0, 0.6)",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						padding: "0 24px",
						zIndex: 1200,
					}}
				>
					<Typography variant="h6" sx={{ color: "#f7c600", fontWeight: "bold" }}>
						FSTU KIBERSPORT
					</Typography>

					<List
						sx={{
							display: { xs: "none", md: "flex" },
							flexDirection: "row",
							gap: 2,
						}}
					>
						{menuItems.map((item, index) => (
							<ListItem key={index} disablePadding sx={{ width: "auto" }}>
								<ListItemButton
									component={ScrollLink}
									to={item.id}
									smooth={true}
									duration={700}
									spy={true}
									exact="true"
									offset={-80}
									sx={{
										color: "white",
										cursor: "pointer",
										"&:hover": {
											color: "#f7c600",
											backgroundColor: "rgba(255,255,255,0.1)",
										},
									}}
								>
									<ListItemText primary={item.text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>

					<IconButton
						sx={{ color: "#fff", display: { xs: "block", md: "none" } }}
						onClick={menyuniAlmashtirish}
					>
						<MenuIcon />
					</IconButton>
				</motion.nav>
			)}

			{/* === MOBIL MENYU (Drawer) === */}
			<Drawer anchor="right" open={mobilMenyu} onClose={menyuniAlmashtirish}>
				<Box sx={{ width: 250, backgroundColor: "#000", height: "100vh", color: "#fff", p: 2 }}>
					<Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
						<Typography variant="h6" sx={{ color: "#f7c600" }}>
							Menyu
						</Typography>
						<IconButton onClick={menyuniAlmashtirish} sx={{ color: "#fff" }}>
							<CloseIcon />
						</IconButton>
					</Box>
					<List>
						{menuItems.map((item, index) => (
							<ListItem key={index} disablePadding>
								<ListItemButton
									component={ScrollLink}
									to={item.id}
									smooth={true}
									duration={700}
									spy={true}
									exact="true"
									offset={-80}
									onClick={menyuniAlmashtirish}
									sx={{
										color: "#fff",
										"&:hover": {
											color: "#f7c600",
											backgroundColor: "rgba(255,255,255,0.1)",
										},
									}}
								>
									<ListItemText primary={item.text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Navbar;
