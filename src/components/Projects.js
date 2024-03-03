import "../styles/Projects.css";

function Projects() {
	return (
		<div className="Projects_Section">
			<p className="Project_Header">Projects</p>
			<div className="Project_Container">
				<div className="Project_Div">
					<a
						className="Project_Link"
						target="_blank"
						rel="noreferrer"
						href="https://drinkraja.com"
					>
						<img
							className="Project_Img"
							alt="Drink Raja"
							src={require("../assets/raja.png")}
						/>
						<div className="Icon_Div">
							<img
								className="Project_Icon"
								alt="React"
								src={require("../assets/react.png")}
							/>
							<img
								className="Project_Icon"
								alt="Firebase"
								src={require("../assets/firebase.png")}
							/>
						</div>
						<p className="Project_Text">
							The official launchpage for Raja Chai Latte. A local Chai
							beverage.
						</p>
					</a>
				</div>
				<div className="Project_Div">
					<a
						className="Project_Link"
						target="_blank"
						rel="noreferrer"
						href="https://zepedadogs.web.app"
					>
						<img
							className="Project_Img"
							alt="Zepeda Dog Services"
							src={require("../assets/zepeda.png")}
						/>
						<div className="Icon_Div">
							<img
								className="Project_Icon"
								alt="React"
								src={require("../assets/react.png")}
							/>
							<img
								className="Project_Icon"
								alt="Firebase"
								src={require("../assets/firebase.png")}
							/>
						</div>
						<p className="Project_Text">
							The official website for Zepeda Dog Services. A Dog training,
							walking, and daycare service.
						</p>
					</a>
				</div>
				<div className="Project_Div">
					<a
						className="Project_Link"
						target="_blank"
						rel="noreferrer"
						href="https://www.zaragozasconstruction.com"
					>
						<img
							className="Project_Img"
							alt="Zaragoza Construction"
							src={require("../assets/zaragoza.png")}
						/>
						<div className="Icon_Div">
							<img
								className="Project_Icon"
								alt="React"
								src={require("../assets/react.png")}
							/>
							<img
								className="Project_Icon"
								alt="Firebase"
								src={require("../assets/firebase.png")}
							/>
						</div>
						<p className="Project_Text">
							The website for Zaragoza Construction. A local home rennovation
							service.
						</p>
					</a>
				</div>
				<div className="Project_Div">
					<a
						className="Project_Link"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/rmejia64/BDA-Cali-App"
					>
						<img
							className="Project_Img"
							alt="Banco De Alimentos: Cali"
							src={require("../assets/bda.png")}
						/>
						<div className="Icon_Div">
							<img
								className="Project_Icon"
								alt="React"
								src={require("../assets/react.png")}
							/>
							<img
								className="Project_Icon"
								alt="Firebase"
								src={require("../assets/firebase.png")}
							/>
						</div>
						<p className="Project_Text">
							A mobile donation tracking interface for Banco De Alimentos: Cali.
						</p>
					</a>
				</div>
				<div className="Project_Div">
					<a
						className="Project_Link"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/rmejia64/StudyBuddy"
					>
						<img
							className="Project_Img"
							alt="StudyBuddy"
							src={require("../assets/study.png")}
						/>
						<div className="Icon_Div">
							<img
								className="Project_Icon"
								alt="React"
								src={require("../assets/react.png")}
							/>
							<img
								className="Project_Icon"
								alt="Firebase"
								src={require("../assets/firebase.png")}
							/>
						</div>
						<p className="Project_Text">
							StudyBuddy is a mobile application that provides an effective and
							entertaining way of reviewing material.
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
