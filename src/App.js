import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Designs from "./components/Designs";
import Projects from "./components/Projects";
import Sketch from "./components/Sketch";

import { useState, useEffect } from "react";

function App() {
	const [currentState, setState] = useState("Home");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate a delay for the purpose of the example
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clean up the timeout to prevent memory leaks
		return () => clearTimeout(timeout);
	}, []);

	const getComponent = () => {
		let component;

		switch (currentState) {
			case "Home":
				component = <Home />;
				break;

			case "Designs":
				component = <Designs />;
				break;

			case "Projects":
				component = <Projects />;
				break;

			default:
				component = <Home />;
				break;
		}

		return component;
	};

	return (
		<div className="wrapper">
			{loading ? (
				// Render the loading div while loading is true
				<div className="loading-animation"><strong>Rodrigo Mejia</strong>&nbsp;<span style={{color:"#606060"}}>Portfolio</span></div>
			) : (
				<>
				<Navbar setCurrentState={setState} />
				{getComponent()}
				<Footer />
				<Sketch />
				</>
			)}
		</div>
	);
}

export default App;
