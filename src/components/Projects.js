import React, { useEffect } from "react";
import "../styles/Projects.css";

const images = [
	require("../assets/zepeda.png"),
	require("../assets/raja.png"),
	require("../assets/bda.png"),
	require("../assets/study.png"),
	require("../assets/zaragoza.png"),
	require("../assets/react.png"),
	require("../assets/firebase.png"),
	require("../assets/squarespace.png"),
];

function preloadImages(imageArray) {
	return new Promise((resolve) => {
		const promises = imageArray.map((src) => {
			return new Promise((res) => {
				const img = new Image();
				img.src = src;
				img.onload = res;
				img.onerror = res;
			});
		});
		Promise.all(promises).then(resolve);
	});
}

function Projects() {
	useEffect(() => {
		preloadImages(images).then(() => {
			console.log("All images have been preloaded");
		});
	}, []);

	return (
		<div className="Projects_Section">
			<p className="Project_Header">Projects</p>
			<div className="Project_Container">
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
						<p className="Img_Title">Zepeda Dog Services</p>
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
						href="https://drinkraja.com"
					>
						<img
							className="Project_Img"
							alt="Drink Raja"
							src={require("../assets/raja.png")}
						/>
						<p className="Img_Title">Raja Chai Latte</p>
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
						href="https://github.com/rmejia64/BDA-Cali-App"
					>
						<img
							className="Project_Img"
							alt="Banco De Alimentos: Cali"
							src={require("../assets/bda.png")}
						/>
						<p className="Img_Title">BDA:Cali App</p>
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
						<p className="Img_Title">StudyBuddy</p>
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
						<p className="Img_Title">Zaragoza Construction</p>
						<div className="Icon_Div">
							<img
								className="Project_Icon"
								alt="SquareSpace"
								src={require("../assets/squarespace.png")}
							/>
						</div>
						<p className="Project_Text">
							The website for Zaragoza Construction. A local home rennovation
							service.
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;