import "../styles/Home.css";
import self from "../assets/self_simplest.png";

function Home() {
	return (
		<div className="Home_Section">
			<div className="Home_Text">
				<p className="Home_Header">Rodrigo Mejia</p>
				<p className="Home_Subtitle">
					Full-Stack Software Engineer · Founder, Peninsula Digital Solutions
				</p>
				<p className="Home_Main">
					I design, build, and ship web and mobile apps end to end, from
					React/TypeScript front ends to APIs, databases, and the cloud. I
					run Peninsula Digital Solutions, building sites for Bay Area small
					businesses, and I'm building SwingDoctor, an iOS computer-vision app
					for Meta smart glasses. Previously at Study.com and TipNow.
				</p>
			</div>
			<img className="Portrait" src={self} alt="Rodrigo Mejia" />
		</div>
	);
}

export default Home;
