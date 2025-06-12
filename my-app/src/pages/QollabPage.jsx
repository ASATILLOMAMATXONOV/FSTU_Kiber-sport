import React from "react";
import {
	Container,
	Typography,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	Box,
	Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const prizeData = [
	["Kubok", "Sovg‘alar (final)"],
	["Medallar", "Bannerlar"],
	["Diplomlar", "Xizmat safari xarajatlari"],
	["Sovg‘alar", "Nominatsiyalar"],
	["Stipendiyalar", "Hakamlar ish haqi"],
	["Voucherlar", "Futbolka va kepkalar"],
	["Mahorat darslari", "Mukofot fondi"],
	["Xalqaro imkoniyatlar", "Qo‘shimcha xarajatlar"],
];

const finalPrizeData = [
	["CS2", "60 mln so‘m + kubok, medal", "36 mln so‘m + medal", "24 mln so‘m + medal"],
	["Dota 2", "60 mln so‘m + kubok, medal", "36 mln so‘m + medal", "24 mln so‘m + medal"],
	["FC25", "10 mln so‘m + kubok, medal", "6 mln so‘m + medal", "4 mln so‘m + medal"],
	["Just Dance", "20 mln so‘m + kubok, medal", "12 mln so‘m + medal", "8 mln so‘m + medal"],
];

const rowVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.1,
			type: "spring",
			stiffness: 70,
		},
	}),
};

const HoverRow = ({ children, index }) => (
	<motion.tr
		variants={rowVariants}
		initial="hidden"
		animate="visible"
		custom={index}
		style={{
			display: "table-row",
			cursor: "pointer",
		}}
		whileHover={{
			scale: 1.01,
			backgroundColor: "#1e1e1e", // dark gray on hover
		}}
	>
		{children}
	</motion.tr>
);

const QollabPage = () => {
	return (
		<div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", paddingTop: "30px" }}>
			<Container maxWidth="lg">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<Typography variant="h4" gutterBottom fontWeight="bold" color="white">
					 Taqdirlash tartibi
					</Typography>

					<Typography variant="body1" paragraph color="white">
						G‘oliblar uchun voucher, kubok, medal, diplom va qimmatbaho sovg‘alar taqdim etiladi. Shuningdek, ular milliy yoki
						xalqaro kibersport va raqamli festivallarda ishtirok etish imkoniga ega bo‘ladilar.
					</Typography>

					<Typography variant="h6" mt={4} mb={2} color="white">
						Qo‘shimcha sovrinlar va resurslar
					</Typography>

					<Paper elevation={3} sx={{ backgroundColor: "#121212", color: "white", overflowX: "auto" }}>
						<Table>
							<TableBody>
								{prizeData.map((row, i) => (
									<HoverRow key={i} index={i}>
										<TableCell sx={{ color: "white", borderColor: "#333" }}>{row[0]}</TableCell>
										<TableCell sx={{ color: "white", borderColor: "#333" }}>{row[1]}</TableCell>
									</HoverRow>
								))}
							</TableBody>
						</Table>
					</Paper>

					<Box mt={6}>
						<Typography variant="h4" gutterBottom fontWeight="bold" color="white">
						 Final bosqichi g‘oliblariga mukofotlar
						</Typography>

						<Paper elevation={3} sx={{ backgroundColor: "#121212", color: "white", overflowX: "auto" }}>
							<Table>
								<TableHead>
									<TableRow>
										{["O‘yin", "1-o‘rin", "2-o‘rin", "3-o‘rin"].map((col, idx) => (
											<TableCell key={idx} sx={{ color: "white", borderColor: "#333" }}>
												<strong>{col}</strong>
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{finalPrizeData.map((row, i) => (
										<HoverRow key={i} index={i}>
											{row.map((cell, idx) => (
												<TableCell key={idx} sx={{ color: "white", borderColor: "#333" }}>
													{cell}
												</TableCell>
											))}
										</HoverRow>
									))}
								</TableBody>
							</Table>
						</Paper>
					</Box>
				</motion.div>
			</Container>
		</div>
	);
};

export default QollabPage;
