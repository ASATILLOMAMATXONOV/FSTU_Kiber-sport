import React, { useState } from "react";
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
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// 🌐 English Menu Items
const menuItems = [
	{ text: "HOME", id: "home" },
	{ text: "ASSOCIATION", id: "association" },
	{ text: "EVENTS", id: "goals" },
	{ text: "CONTACTS", id: "contacts" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box
			component={motion.nav}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.6)",
				px: 3,
				py: 2,
				zIndex: 1000,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-evenly",
			}}
		>
			<Typography variant="h6" sx={{ color: "#f7c600", fontWeight: "bold" }}>
				FSTU CYBERSPORT
			</Typography>

			{/* Desktop Navigation */}
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
									backgroundColor: "rgba(255, 255, 255, 0.1)",
								},
							}}
						>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>

			{/* Mobile Menu Icon */}
			<IconButton
				sx={{ color: "#fff", display: { xs: "block", md: "none" } }}
				onClick={toggleDrawer}
			>
				<MenuIcon />
			</IconButton>

			{/* Mobile Drawer */}
			<Drawer anchor="right" open={open} onClose={toggleDrawer}>
				<Box sx={{ width: 250, backgroundColor: "#000", height: "100vh", color: "#fff", p: 2 }}>
					<Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
						<Typography variant="h6" sx={{ color: "#f7c600" }}>
							Menu
						</Typography>
						<IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
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
									onClick={toggleDrawer}
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
