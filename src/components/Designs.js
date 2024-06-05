import React, { useEffect, useState } from "react";
import "../styles/Designs.css";
import Modal from "./Modal";

const zepeda = require("../assets/zepeda-design.png");
const bowling = require("../assets/bowling.png");
const bill = require("../assets/Bill_Wilson_Center_Redesign.png");
const seeds = require("../assets/Semillias_Website.png");

const imagesToPreload = [
	zepeda,
	bowling,
	bill,
	seeds,
	require("../assets/zepeda-logo.png"),
	require("../assets/bowling-logo.png"),
	require("../assets/bwc-logo.png"),
	require("../assets/seeds-logo.png")
];

function preloadImages(imageArray) {
	return new Promise((resolve) => {
		const promises = imageArray.map((src) => {
			return new Promise((res) => {
				const img = new Image();
				img.src = src;
				img.onload = res;
				img.onerror = res; // Resolve even if there's an error to not hang the loading
			});
		});
		Promise.all(promises).then(resolve);
	});
}

function Designs() {
	const [selectedImage, setImage] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [scrollLock, toggleScrollLock] = useState(false);

	useEffect(() => {
		preloadImages(imagesToPreload).then(() => {
			console.log("All images have been preloaded");
		});
	}, []);

	const getImage = (image) => {
		setImage(image);
		toggleScrollLock(true);
		setIsModalOpen(true);
	};

	return (
		<div
			className="Design_Section"
			style={{ overflow: scrollLock ? "hidden" : "auto" }}
		>
			{isModalOpen && (
				<Modal
					toggleModal={setIsModalOpen}
					selectedImage={selectedImage}
					toggleScrollLock={toggleScrollLock}
				/>
			)}
			<p className="Design_Header">Designs</p>
			<div className="Design_Container">
				<div className="Design_Div">
					<div className="logos_div">
						<img
							className="logo"
							alt="Zepeda Dog Services Logo"
							src={require("../assets/zepeda-logo.png")}
						/>
						<p className="Design_Text">Zepeda Dogs</p>
					</div>
					<img
						className="Design_Img"
						alt="Zepeda Dog Services website"
						src={zepeda}
						onClick={() => getImage(zepeda)}
					/>
				</div>
				<div className="Design_Div">
					<div className="logos_div">
						<img
							className="logo"
							alt="SCU Bowling Club Logo"
							src={require("../assets/bowling-logo.png")}
						/>
						<p className="Design_Text">SCU's Bowling Club</p>
					</div>
					<img
						className="Design_Img"
						alt="Redesign of SCU Bowling Club website"
						src={bowling}
						onClick={() => getImage(bowling)}
					/>
				</div>
				<div className="Design_Div">
					<div className="logos_div">
						<img
							className="logo"
							alt="Bill Wilson Center Logo"
							src={require("../assets/bwc-logo.png")}
						/>
						<p className="Design_Text">Bill Wilson Center</p>
					</div>
					<img
						className="Design_Img"
						alt="Redesign of Bill Wilson Center website"
						src={bill}
						onClick={() => getImage(bill)}
					/>
				</div>
				<div className="Design_Div">
					<div className="logos_div">
						<img
							className="logo"
							alt="Semillas De Amor Logo"
							src={require("../assets/seeds-logo.png")}
						/>
						<p className="Design_Text">Semillas De Amor</p>
					</div>
					<img
						className="Design_Img"
						alt="Redesign of Semillas De Amor website"
						src={seeds}
						onClick={() => getImage(seeds)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Designs;