import "../styles/Navbar.css";

function Navbar({ setCurrentState }) {
	return (
		<div className="nav">
			<div className="social-links">
				<a target="_blank" rel="noreferrer" href="https://github.com/rmejia64">
					<img
						className="icon"
						src={require("../assets/github-logo.png")}
						alt="GitHub"
					></img>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://linkedin.com/in/rmejia36"
				>
					<img
						className="icon"
						src={require("../assets/linkedin-logo.png")}
						alt="LinkedIn"
					></img>
				</a>
			</div>

			<div className="page-links">
				<p className="link" onClick={() => setCurrentState("Home")}>
					Home
				</p>
				{/* <p className="link" onClick={() => setCurrentState("Work")}>
					Work
				</p> */}
				<p className="link" onClick={() => setCurrentState("Projects")}>
					Projects
				</p>
				<p className="link" onClick={() => setCurrentState("Designs")}>
					Designs
				</p>
			</div>
		</div>
	);
}

export default Navbar;
