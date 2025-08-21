import "../styles/Home.css";
import self from "../assets/self_simplest.png";

function Home() {
	return (
		<div className="Home_Section">
			<div className="Home_Text">
				<p className="Home_Header">Rodrigo Mejia</p>
				<p className="Home_Main">
					Full-stack software engineer with experience in web development, AI, and NLP. I enjoy building scalable, user-focused applications that make an impact. I love solving problems end-to-end and collaborating with teams to bring ideas to life.
				</p>
			</div>
			<img className="Portrait" src={self} alt="Rodrigo Mejia" />
		</div>
	);
}

export default Home;
