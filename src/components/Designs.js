import "../styles/Designs.css";

import design1 from "../assets/Bill_Wilson_Center_Redesign.png";

function Designs() {
	return (
		<div className="Design_Section">
			<p className="Design_Header">Designs</p>
			<div className="Design_Container">
				<img
					className="Design_Img"
					alt="Redesign of Bill Wilson Center website"
					src={design1}
				/>
				<img
					className="Design_Img"
					alt="Redesign of SCU Bowling Club website"
					src={require("../assets/bowling.png")}
				/>
				<img
					className="Design_Img"
					alt="Redesign of Semillas De Amor website"
					src={require("../assets/Semillias_Website.png")}
				/>
			</div>
		</div>
	);
}

export default Designs;
