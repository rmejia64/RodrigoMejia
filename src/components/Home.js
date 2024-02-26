import "../styles/Home.css";
import self from "../assets/self_simple.png";

function Home() {
	return (
		<div className="content">
				<div className="text">
					<p className="title">Rodrigo Mejia</p>
					<p className="subtitle">Developer/Designer</p>
					<p className="main">
						I'm a developer and designer based in the San Francisco Bay Area. I
						am focused on building responsive human-centered websites and mobile
						applications.
					</p>
				</div>
				<img className="self" src={self} alt="Rodrigo Mejia" />
			</div>
	);
}

export default Home;
