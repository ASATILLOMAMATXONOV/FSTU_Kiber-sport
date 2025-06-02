import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Image as ImageIcon, Info as InfoIcon, SupportAgent as SupportIcon } from "@mui/icons-material";
import corpoImg from "../assets/corpo.jpg";

// Umumiy container uchun delaylar
const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

// Harakat yo‘nalishiga qarab variantlar
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
	const features = [
		{
			icon: <ImageIcon sx={{ fontSize: 48, color: "#ffc107", mb: 2 }} />,
			title: "Aloqa",
			text: "Sport tadbirlarini tashkil qilish va amalga oshirishda ishtirok etish, shuningdek, milliy va xalqaro chempionatlarni o'tkazish.",
			animation: fromLeft,
		},
		{
			icon: <InfoIcon sx={{ fontSize: 48, color: "#ffc107", mb: 2 }} />,
			title: "Ma'lumot",
			text: "Kibersportni O‘zbekistonda raqobatbardosh sport faoliyatining yangi turi sifatida rivojlantirishga ko‘maklashish.",
			animation: fromBottom,
		},
		{
			icon: <SupportIcon sx={{ fontSize: 48, color: "#ffc107", mb: 2 }} />,
			title: "Qo‘llab-quvvatlash",
			text: "Kibersportni sport muassasalari, sport klublari va boshqa tashkilotlarda tashkiliy va metodik jihatdan qo‘llab-quvvatlash.",
			animation: fromRight,
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
