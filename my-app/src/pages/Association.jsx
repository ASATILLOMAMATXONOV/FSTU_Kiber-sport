import React from "react";
import "../App.css";
import { Image as ImageIcon, Info as InfoIcon, SupportAgent as SupportIcon } from "@mui/icons-material";

const Association = () => {
	return (
		<section className="association-section" id="association">
			<div
				className="association-banner"
				style={{
					backgroundImage: "url('https://yt3.googleusercontent.com/ytc/AIdro_lBx7zYMSkeMHomiu3ORLOFwJmo04kN9cl6RwK_bVvjww=s900-c-k-c0x00ffffff-no-rj')",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					height: "500px",
					padding: "20px",
					backgroundColor: "#000",
				}}
			></div>

			<div className="association-grid">
				<div className="feature-block">
					<ImageIcon sx={{ fontSize: 48, color: '#ffc107', mb: 2 }} />
					<h4>Communication</h4>
					<p>
						Participation in the formation and implementation of sports mass events, as well as the organization and conduct of national and international championships.
					</p>
				</div>
				<div className="feature-block">
					<InfoIcon sx={{ fontSize: 48, color: '#ffc107', mb: 2 }} />
					<h4>Information</h4>
					<p>
						Promoting the development of e-sports in Uzbekistan as a new type of competitive sporting activity and specialized practice.
					</p>
				</div>
				<div className="feature-block">
					<SupportIcon sx={{ fontSize: 48, color: '#ffc107', mb: 2 }} />
					<h4>Support</h4>
					<p>
						Organizational and methodological support for e-sports in specialized sports institutions, sports clubs, and other organizations.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Association;
