// components/Countdown.js
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
	const calculateTimeLeft = () => {
		const difference = +new Date(targetDate) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div style={{ marginTop: "15px", color: "#ffc107", fontFamily: "'Orbitron', sans-serif", fontSize: "1.1rem" }}>
			{timeLeft.days != null ? (
				<>
					⏳ Turnirgacha: <br /> <br /> {timeLeft.days} kun, {timeLeft.hours} soat, {timeLeft.minutes} daqiqa, {timeLeft.seconds} soniya
				</>
			) : (
				<span>🚀 Turnir boshlandi!</span>
			)}
		</div>
	);
};

export default Countdown;
