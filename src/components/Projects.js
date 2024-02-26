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
					<br></br>A preliminary webite for Raja Chai Latte.
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
					<br></br>The official website for Zepeda Dog Services. A Dog training, walking,
					and daycare service.
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
					<br></br>The website for Zaragoza Construction. A local home rennovation
					service.
				</a>
			</div>
		</div>
	);
}

export default Projects;
