import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

const menuItems = [
	{ text: "ГЛАВНАЯ", path: "/" },
	{ text: "АССОЦИАЦИЯ", path: "/association" },
	{ text: "МЕРОПРИЯТИЯ", path: "/events" },
	{ text: "КОНТАКТЫ", path: "/contacts" },
];

const Navbar = () => {
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
				px: 4,
				py: 2,
				zIndex: 1000,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
			}}
		>
			<Typography variant="h6" sx={{ color: "#f7c600", fontWeight: "bold" }}>
				UZ CYBERSPORT
			</Typography>
			<List sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
				{menuItems.map((item, index) => (
					<ListItem key={index} disablePadding sx={{ width: "auto" }}>
						<ListItemButton
							component={Link}
							to={item.path}
							sx={{
								color: "white",
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
		</Box>
	);
};

export default Navbar;
