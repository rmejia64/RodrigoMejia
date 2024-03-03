import "../styles/Footer.css";

function Footer() {
	return (
		<div className="footer">
			<p className="footer-text">2024 &copy; Rodrigo Mejia</p>
			<div className="footer-links">
				<a className="footer-link" href="mailto: me@rodrigomejia.com">
					<div className="tooltip">
						Contact
						<span className="tooltiptext">Send Email</span>
					</div>
				</a>
				<a
					className="footer-link"
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
