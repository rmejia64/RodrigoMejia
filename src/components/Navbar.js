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
			<img
				className="menu-button"
				alt="Menu"
				src={require("../assets/menu.png")}
			/>

			<div className="page-links">
				<p className="link" onClick={() => setCurrentState("Home")}>
					Home
				</p>
				<p className="link" onClick={() => setCurrentState("Designs")}>
					Designs
				</p>
				<p className="link" onClick={() => setCurrentState("Projects")}>
					Projects
				</p>
				<a className="link" href="mailto: rmejia.g36@gmail.com">
					<div class="tooltip">
						Contact
						<span class="tooltiptext">Send Email</span>
					</div>
				</a>
				<a className="link" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1vUExRik8I88c5mOwfQ7xHa0P09HETlgmbNn68igSKvQ/edit?usp=sharing">
					<div class="tooltip">
						Resume
						<span class="tooltiptext">Google Drive</span>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Navbar;
