import React, { useEffect } from "react";
import "../styles/Projects.css";

const icons = {
	React: require("../assets/react.png"),
	Firebase: require("../assets/firebase.png"),
	Squarespace: require("../assets/squarespace.png"),
};

// Projects without a screenshot get a text cover instead of an image.
// Projects without a link render as a plain card.
const projects = [
	{
		title: "SwingDoctor",
		cover: "Tennis vision for Meta smart glasses",
		tech: ["Swift", "Meta Wearables SDK", "Computer Vision"],
		text: "An iOS app that streams first-person video from Meta AI glasses and records clips with audio. I'm adding on-device pose estimation and tennis-ball detection to track an opponent's swings and court position and give the wearer real-time positioning feedback, plus a phone-camera mode for analyzing your own stance, footwork, and swing. In active development.",
	},
	{
		title: "Raja Chai Latte",
		img: require("../assets/raja.png"),
		href: "https://drinkraja.com",
		tech: ["React", "Firebase"],
		text: "Launch page for Raja Chai Latte, a local chai beverage brand. Client: Raja Brands LLC.",
	},
	{
		title: "Zepeda Dog Services",
		img: require("../assets/zepeda.png"),
		tech: ["React", "Firebase"],
		text: "Website for Zepeda Dog Services, a dog training, walking, and daycare business.",
	},
	{
		title: "Zaragoza Construction",
		img: require("../assets/zaragoza.png"),
		href: "https://www.zaragozasconstruction.com",
		tech: ["Squarespace"],
		text: "Website for Zaragoza Construction, a local home renovation company.",
	},
	{
		title: "BDA:Cali App",
		img: require("../assets/bda.png"),
		href: "https://github.com/rmejia64/BDA-Cali-App",
		tech: ["React", "Firebase"],
		text: "A React Native mobile app for Banco de Alimentos: Cali that tracks donations and assigns drivers for pickups.",
	},
	{
		title: "StudyBuddy",
		img: require("../assets/study.png"),
		href: "https://github.com/rmejia64/StudyBuddy",
		tech: ["React", "Firebase"],
		text: "A mobile app that makes reviewing material effective and entertaining.",
	},
	{
		title: "Pi 5 Game Server",
		cover: "Self-hosted on a Raspberry Pi 5",
		tech: ["Linux", "Bash", "Java"],
		text: "A modded (Fabric) Minecraft server running on a Raspberry Pi 5, with a scripted launcher, a tuned JVM heap, and scripted world backups, kept up to date across game and mod-loader upgrades.",
	},
];

function preloadImages(imageArray) {
	return Promise.all(
		imageArray.map(
			(src) =>
				new Promise((res) => {
					const img = new Image();
					img.src = src;
					img.onload = res;
					img.onerror = res;
				})
		)
	);
}

function TechList({ tech }) {
	const allIcons = tech.every((t) => icons[t]);
	if (allIcons) {
		return (
			<div className="Icon_Div">
				{tech.map((t) => (
					<img key={t} className="Project_Icon" alt={t} title={t} src={icons[t]} />
				))}
			</div>
		);
	}
	return (
		<div className="Tag_Div">
			{tech.map((t) => (
				<span key={t} className="Project_Tag">
					{t}
				</span>
			))}
		</div>
	);
}

function ProjectCard({ project }) {
	const body = (
		<>
			{project.img ? (
				<>
					<img className="Project_Img" alt={project.title} src={project.img} />
					<p className="Img_Title">{project.title}</p>
				</>
			) : (
				<div className="Project_Cover">
					<p className="Cover_Title">{project.title}</p>
					<p className="Cover_Sub">{project.cover}</p>
				</div>
			)}
			<TechList tech={project.tech} />
			<p className="Project_Text">{project.text}</p>
		</>
	);

	return (
		<div className="Project_Div">
			{project.href ? (
				<a className="Project_Link" target="_blank" rel="noreferrer" href={project.href}>
					{body}
				</a>
			) : (
				<div className="Project_Link">{body}</div>
			)}
		</div>
	);
}

function Projects() {
	useEffect(() => {
		const images = [
			...projects.filter((p) => p.img).map((p) => p.img),
			...Object.values(icons),
		];
		preloadImages(images);
	}, []);

	return (
		<div className="Projects_Section">
			<p className="Project_Header">Projects</p>
			<div className="Project_Container">
				{projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
