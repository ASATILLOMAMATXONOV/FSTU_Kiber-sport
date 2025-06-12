import React from "react";
import { motion } from "framer-motion";
import { Box, Card, CardContent, Typography, Grid, Container } from "@mui/material";
import cs2 from "../assets/cs2.png";
import dota2 from "../assets/dota2.png";
import fc25 from "../assets/fc25.png";
import "../styles/MalumotPage.css"; // CSS faylni import qilamiz

const games = [
	{
		title: "CS2 (Counter-Strike 2)",
		genre: "First-Person Shooter (FPS)",
		platform: "PC",
		image: cs2,
	},
	{
		title: "Dota 2",
		genre: "MOBA (Strategy)",
		platform: "PC",
		image: dota2,
	},
	{
		title: "FC25",
		genre: "Sport simulyatori",
		platform: "PlayStation",
		image: fc25,
	},
];

const MalumotPage = () => {
	return (
		<div className="animated-background">
			<Container maxWidth="lg" sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Typography variant="h3" gutterBottom fontWeight="bold" align="center" color="white">
						Talabalar Kibersport O‘yinlari Farg‘ona 2025
					</Typography>

					<motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
						<Typography variant="h5" gutterBottom mt={4} color="white">
							1. Tashkiliy Tuzilma
						</Typography>
						<Typography paragraph color="white">
							Musobaqa doirasida 3 ta asosiy ishchi guruh shakllantiriladi. Farg‘ona davlat texnika universiteti asosiy
							tashkiliy masalalar uchun mas’ul bo‘lib, Qoraqalpog‘iston Respublikasi va viloyatlardagi texnika universitetlari
							saralash bosqichlari uchun javobgar hisoblanadi.
						</Typography>
					</motion.div>

					<Typography variant="h5" mt={4} gutterBottom color="white">
						2. Musobaqa Yo‘nalishlari
					</Typography>

					<Grid container spacing={3}>
						{games.map((game, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<motion.div whileHover={{ scale: 1.05 }}>
									<Card sx={{ borderRadius: "16px", boxShadow: 4 }}>
										<img
											src={game.image}
											alt={game.title}
											style={{
												width: "100%",
												height: "180px",
												objectFit: "cover",
												borderTopLeftRadius: "16px",
												borderTopRightRadius: "16px",
											}}
										/>
										<CardContent>
											<Typography variant="h6" fontWeight="bold">
												{game.title}
											</Typography>
											<Typography variant="body2">🎮 Janr: {game.genre}</Typography>
											<Typography variant="body2">🖥 Platforma: {game.platform}</Typography>
										</CardContent>
									</Card>
								</motion.div>
							</Grid>
						))}
					</Grid>

					<Typography variant="h5" mt={6} gutterBottom color="white">
						3. Format
					</Typography>
					<ul style={{ fontSize: "16px", marginLeft: "20px", color: "white" }}>
						<li>Oflayn turnir shaklida</li>
						<li>16 ta saralangan jamoa</li>
						<li>3 kunlik davomiylik</li>
					</ul>

					<Typography variant="h5" mt={4} gutterBottom color="white">
						4. Infratuzilma
					</Typography>
					<ul style={{ fontSize: "16px", marginLeft: "20px", color: "white" }}>
						<li>60 ta o‘yin PClari, 4 ta PS5, 2 ta 65” monitor</li>
						<li>Internet: ajratilgan liniya + 5G zaxira</li>
						<li>Arena: LED ekranlar bilan jihozlangan</li>
					</ul>

					<Typography variant="h5" mt={4} gutterBottom color="white">
						5. Tashkilotchilar
					</Typography>
					<ul style={{ fontSize: "16px", marginLeft: "20px", color: "white" }}>
						<li>Viloyatlar hokimliklari</li>
						<li>Oliy ta’lim, fan va innovatsiyalar vazirligi</li>
						<li>Texnika OTM rektorlari</li>
						<li>Viloyat sport boshqarmalari</li>
					</ul>
				</motion.div>
			</Container>
		</div>
	);
};

export default MalumotPage;
