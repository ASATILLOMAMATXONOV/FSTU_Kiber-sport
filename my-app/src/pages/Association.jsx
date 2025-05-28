// Association.jsx
import React from "react";
import "../App.css";
import { Image as ImageIcon, Info as InfoIcon, SupportAgent as SupportIcon } from "@mui/icons-material";

const Association = () => {
	return (
		<section className="association-section" >
			<div
				className="association-banner"
				style={{
					backgroundImage: "url('https://uca.uz/images/corpo.png')",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					height: "500px",
					padding : "20px",
					backgroundColor: "#000",
				}}
			></div>

			<div className="association-grid">
				<div className="feature-block">
					<ImageIcon sx={{ fontSize: 48, color: '#ffc107', mb: 2 }} />
					<h4>Коммуникативность.</h4>
					<p>
						Участие в формировании и реализации спортивно-массовых мероприятий, а также организация и проведение республиканских и международных чемпионатов.
					</p>
				</div>
				<div className="feature-block">
					<InfoIcon sx={{ fontSize: 48, color: '#ffc107', mb: 2 }} />
					<h4>Информативность.</h4>
					<p>
						Содействие развитию в Узбекистане компьютерного спорта как нового вида спортивной соревновательной деятельности и специальной практики.
					</p>
				</div>
				<div className="feature-block">
					<SupportIcon sx={{ fontSize: 48, color: '#ffc107', mb: 2 }} />
					<h4>Поддержка.</h4>
					<p>
						Организационная и методическая поддержка киберспорта в специализированных спортивных учреждениях, спортивных клубах и иных организациях.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Association;