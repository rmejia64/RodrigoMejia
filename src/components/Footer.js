import "../styles/Footer.css";

function Footer() {
	return (
		<div className="foot">
			<p className="foot-text">2024 &copy; Rodrigo Mejia</p>
			<div className="foot-links">
				<a className="foot-link" href="mailto: rmejia.g36@gmail.com">
					<div className="tooltip">
						Contact
						<span className="tooltiptext">Send Email</span>
					</div>
				</a>
				<a
					className="foot-link"
					target="_blank"
					rel="noreferrer"
					href="https://docs.google.com/document/d/1vUExRik8I88c5mOwfQ7xHa0P09HETlgmbNn68igSKvQ/edit?usp=sharing"
				>
					<div className="tooltip">
						Resume
						<span className="tooltiptext">Google Drive</span>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Footer;
