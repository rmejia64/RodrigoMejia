import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

import { useState } from "react";

function App() {
	const [currentState, setState] = useState("Home");

	const getComponent = () => {
		let component;

		switch (currentState) {
			case "Home":
				component = <Home />;
				break;

			case "About":
				component = <About />;
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
			<Navbar setCurrentState={setState} />
			{getComponent()}
			<Footer />
		</div>
	);
}

export default App;