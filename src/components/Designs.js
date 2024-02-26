import "../styles/Designs.css";

import design1 from "../assets/Bill_Wilson_Center_Redesign.png";

function Designs() {
	return (
		<div className="content-two">
			<p className="title-two">Designs</p>
			<div className="cards">
				<img
					className="design"
					alt="Redesign of Bill Wilson Center website"
					src={design1}
				/>
				<img
					className="design"
					alt="Redesign of SCU Bowling Club website"
					src={require("../assets/SCU_Bowling_Club.png")}
				/>
				<img
					className="design"
					alt="Redesign of Semillas De Amor website"
					src={require("../assets/Semillias_Website.png")}
				/>
			</div>
		</div>
	);
}

export default Designs;
