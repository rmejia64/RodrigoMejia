import "../styles/Home.css";
import self from "../assets/self_simplest.png";

function Home() {
	return (
		<div className="Home_Section">
				<div className="Home_Text">
					<p className="Home_Header">Rodrigo Mejia</p>
					<p className="Home_Subtitle">Developer/Designer</p>
					<p className="Home_Main">
						I'm a developer and designer based in the San Francisco Bay Area. I
						am focused on building responsive human-centered websites and mobile
						applications.
					</p>
				</div>
				<img className="Portrait" src={self} alt="Rodrigo Mejia" />
			</div>
	);
}

export default Home;
