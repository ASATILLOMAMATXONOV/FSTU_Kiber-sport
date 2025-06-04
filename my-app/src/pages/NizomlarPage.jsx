import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const nizomData = [
	{
		title: "1. Umumiy qoidalar",
		content: [
			"1.1. Ushbu Nizom Oliy ta’lim, fan va innovatsiyalar vazirligi tasarrufiga kiruvchi oliy ta’lim muassasalari talabalari o‘rtasida Fidjital sport va Kibersport bo‘yicha musobaqalar (keyingi o‘rinlarda: turnir) qoidalari, tashkil etish va uni o‘tkazish shartlarini – Texnik reglament asosida tartibga soladi.",
			"2.2. Oliy ta’lim muassasalari talaba-o‘quvchilari o‘rtasida ommaviy kompyuter sportini rivojlantirish, oliy ta’lim muassasalarida kibersport o‘yinlariga qiziquvchi yoshlarni kibersportga jalb qilish, ularda tizimli sport va sog‘lom turmush tarziga bo‘lgan qiziqishlarni rivojlantirish."
		]
	},
	{
		title: "2. Turnirning asosiy maqsadi",
		content: [
			"2.1. Hududlarda kibersportni xavfsiz rivojlantirish va ommalashtirish bo‘yicha ekotizim yaratish.",
			"2.2. Oliy ta’lim muassasalari talaba-o‘quvchilari o‘rtasida ommaviy kompyuter sportini rivojlantirish, oliy ta’lim muassasalarida kibersport o‘yinlariga qiziquvchi yoshlarni kibersportga jalb qilish, ularda tizimli sport va sog‘lom turmush tarziga bo‘lgan qiziqishlarni rivojlantirish."
		]
	},
	{
		title: "3. Turnir tashkilotchilarining huquq va majburiyatlari",
		content: [
			"3.1. Ishtirokchilarning turnirda ishtirok etishi uchun talabnomalarni qabul qilish va ularni ro‘yxatga olishni tashkil etish.",
			"3.2. Tashkilotchi musobaqaning sport yaxlitligini saqlab qolish uchun musobaqaning istalgan bosqichida oldindan ogohlantirmasdan ushbu qoidalarni olib tashlash, o‘zgartirish yoki o‘zgartirish huquqini o‘zida saqlab qoladi...",
			"3.3. Tashkilotchi musobaqani translyatsiya qilish uchun istalgan o‘yinni tanlash huquqiga ega...",
			"3.4. Tashkilotchi musobaqalarni tashkil etish bilan bog‘liq tadbirlarni amalga oshirishi jumladan..."
		]
	},
	{
		title: "4. Jamoalarning huquq va majburiyatlari",
		content: [
			"4.1. Jamoa sardori yoki rahbari ushbu qoidalar bilan bog‘liq ma’lumotlarni jamoa a’zolariga yetkazish uchun mas’uldir.",
			"4.2. Jamoa a’zolariga turnir hakamlari harakatlariga aralashish ta’qiqlanadi...",
			"4.3. O‘yindan oldin, davomida yoki so‘ng g‘ayriqonuniy xatti-harakatlar bo‘lsa...",
			"4.4. Turnirda ishtirok etish - bu qoidalar, ko‘rsatmalar va yo‘riqnomalarga rozi bo‘lishni anglatadi.",
			"4.5. Tashkilotchilarni obro‘sizlantirishga yo‘l qo‘yilmasligi kerak...",
			"4.6. Nomaqbul avatarlarga va jamoa nomlariga yo‘l qo‘yilmaydi.",
			"4.7. Noto‘g‘ri ma’lumot bergan jamoa ishtirok etish huquqidan mahrum qilinishi mumkin."
		]
	},
	{
		title: "5. Turnirni o‘tkazish tartibi",
		content: [
			"5.1. Prezident qarorlari asosida turnir 3 bosqichda o‘tkaziladi...",
			"5.1.1. Ta’lim muassasa bosqichi (09–14.06.2025)...",
			"5.1.2. Hududiy viloyat bosqichi (15–20.06.2025)...",
			"5.1.3. Final bosqichi Farg‘ona viloyatida (26–28.06.2025)...",
			"5.2. Texnik reglament asosida tartibga solinadi.",
			"5.3. Qirg‘iziston va Tojikistondan 1 tadan jamoa taklif etiladi."
		]
	},
	{
		title: "6. Nizolarni bartaraf etish",
		content: [
			"6.1. Hakamlar bosh hakam tomonidan tayinlanadi.",
			"6.2. Yakuniy qaror bosh hakam tomonidan qabul qilinadi.",
			"6.3. Shikoyatlar yozma tarzda topshiriladi.",
			"6.4. Tashkilotchi yakuniy qaror qabul qilish huquqiga ega."
		]
	},
	{
		title: "7. Yakuniy qoidalar",
		content: [
			"7.1. Nizom qoidalarni buzgan shaxslar tanlovdan chetlashtiriladi."
		]
	}
];

const accordionVariants = {
	hidden: { opacity: 0, height: 0 },
	visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
	exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const NizomlarPage = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div style={{ backgroundColor: "#000", color: "#fff", padding: "40px", minHeight: "100vh" }}>
			<h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2em" }}>
				📄 FSTU KIBERSPORT NIZOMI
			</h2>

			{nizomData.map((item, index) => (
				<div
					key={index}
					onClick={() => toggleAccordion(index)}
					style={{
						marginBottom: "20px",
						padding: "15px",
						border: "1px solid #ffc107",
						borderRadius: "8px",
						cursor: "pointer",
						backgroundColor: openIndex === index ? "#222" : "#111",
						transition: "all 0.3s ease"
					}}
				>
					<h3 style={{ fontSize: "18px", marginBottom: "5px", color: "#ffc107" }}>
						{item.title}
					</h3>

					<AnimatePresence initial={false}>
						{openIndex === index && (
							<motion.div
								key="content"
								initial="hidden"
								animate="visible"
								exit="exit"
								variants={accordionVariants}
								style={{ overflow: "hidden", marginTop: "10px" }}
							>
								{item.content.map((line, i) => (
									<p key={i} style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
										{line}
									</p>
								))}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};

export default NizomlarPage;
