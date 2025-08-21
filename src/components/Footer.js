import "../styles/Footer.css";

import resume from "../assets/Rodrigo_Mejia_CV.pdf";

function Footer() {
	return (
		<div className="footer">
			<p className="footer-text">2025 &copy; Rodrigo Mejia</p>
			<div className="footer-links">
				<a className="footer-link" href="mailto: rodrigo@rodrigomejia.com">
					<div className="tooltip">
						Email &#8593;
						<span className="tooltiptext">Send Email</span>
					</div>
				</a>
				<a
					className="footer-link"
					target="_blank"
					rel="noreferrer"
					href={resume}
					download={"Rodrigo_Mejia_CV.pdf"}
				>
					<div className="tooltip">
						Resume &#8595;
						<span className="tooltiptext">Download</span>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Footer;
