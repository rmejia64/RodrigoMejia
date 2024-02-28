import "../styles/Projects.css";

function Projects() {
	return (
		<div className="content-two">
			<p className="title-two">Projects</p>
			<div className="cards-two">
				<a
					className="project-link"
					target="_blank"
					rel="noreferrer"
					href="https://drinkraja.com"
				>
					<img
						className="project"
						alt="Drink Raja"
						src={require("../assets/raja-logo.png")}
					/>
					<p className="project-text">A preliminary webite for Raja Chai Latte.</p>
				</a>
				<a
					className="project-link"
					target="_blank"
					rel="noreferrer"
					href="https://zepedadogs.web.app"
				>
					<img
						className="project"
						alt="Zepeda Dog Services"
						src={require("../assets/zepeda.png")}
					/>
					<p className="project-text">The official website for Zepeda Dog Services. A Dog training, walking,
					and daycare service.</p>
				</a>
				<a
					className="project-link"
					target="_blank"
					rel="noreferrer"
					href="https://www.zaragozasconstruction.com"
				>
					<img
						className="project"
						alt="Zaragoza Construction"
						src={require("../assets/zaragoza.png")}
					/>
					<p className="project-text">The website for Zaragoza Construction. A local home rennovation
					service.</p>
				</a>
			</div>
		</div>
	);
}

export default Projects;
