import React from "react";
import { motion } from "framer-motion";
import corpoImg from "../assets/corpo.jpg";
import { useNavigate } from "react-router-dom";
import GavelIcon from '@mui/icons-material/Gavel';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';



const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const fromTop = {
	hidden: { opacity: 0, y: -100 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fromLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fromBottom = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fromRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Association = () => {
	const navigate = useNavigate();

	const features = [
		{
			icon: <GavelIcon sx={{ fontSize: 48, color: "#ffc107", mb: 2 }} />,
			title: "N I Z O M L A R",
			text: "Sport tadbirlarini tashkil qilish va amalga oshirishda ishtirok etish...",
			animation: fromLeft,
			link: "/nizomlar",
		},
		{
			icon: <EmojiEventsIcon sx={{ fontSize: 48, color: "#ffc107", mb: 2 }} />,
			title: "Ma'lumot",
			text: "Kibersportni raqobatbardosh faoliyat sifatida rivojlantirish...",
			animation: fromBottom,
			link: "/malumot",
		},
		{
			icon: <SupervisorAccountIcon sx={{ fontSize: 48, color: "#ffc107", mb: 2 }} />,
			title: "Qo‘llab-quvvatlash",
			text: "Metodik va tashkiliy qo‘llab-quvvatlash...",
			animation: fromRight,
			link: "/qollab",
		},
	];

	return (
		<motion.section
			className="association-section"
			id="haqida"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div
				className="association-banner"
				variants={fromTop}
				style={{
					backgroundImage: `url(${corpoImg})`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					height: "500px",
					padding: "20px",
					backgroundColor: "#000",
				}}
			/>

			<motion.div className="association-grid" variants={containerVariants}>
				{features.map((item, index) => (
					<motion.div
						className="feature-block"
						key={index}
						variants={item.animation}
						onClick={() => navigate(item.link)}
						style={{ cursor: "pointer" }}
					>
						{item.icon}
						<h4>{item.title}</h4>
						<p>{item.text}</p>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
};

export default Association;
