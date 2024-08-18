import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import About from "./components/About";
import Contact from "./components/Contact"; // Add this if you have a Contact component
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";
import Menu from "./components/Menu";
import "./styles/styles.css";

const App = () => {
	const navigate = useNavigate();
	const [route, setRoute] = useState(null);
	const [isTerminalVisible, setIsTerminalVisible] = useState(false);

	const handleCommandExecute = (cmd) => {
		if (cmd === "home") {
			setRoute("/");
			navigate("/");
		} else if (cmd === "about") {
			setRoute("/about");
			navigate("/about");
		} else if (cmd === "contact") {
			setRoute("/contact");
			navigate("/contact");
		} else if (cmd === "projects") {
			setRoute("/projects");
			navigate("/projects");
		} else {
			setRoute(null);
		}
	};
	const toggleTerminalVisibility = () => {
		setIsTerminalVisible(!isTerminalVisible);
	};
    
	return (
		<div className="app">
			<Header />
			{isTerminalVisible && (
				<Terminal onCommandExecute={handleCommandExecute} />
			)}
			<Menu onTerminalClick={toggleTerminalVisibility} />
			<div className="container">
				<Sidebar />
				<Routes>
					{route === "/" && <Route path="/" element={<MainContent />} />}
					{route === "/about" && <Route path="/about" element={<About />} />}
					{route === "/contact" && (
						<Route path="/contact" element={<Contact />} />
					)}
					{route === "/projects" && (
						<Route path="/projects" element={<Projects />} />
					)}
					
						<Route path="/" element={<MainContent />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/terminal" element={<Terminal />} />
						{/* <Route path="/files" element={<Files />} />
						<Route path="/code" element={<Code />} />
						<Route path="/photos" element={<Photos />} />
						<Route path="/documents" element={<Documents />} />
						<Route path="/pdf" element={<PDF />} /> */}
					
				</Routes>
			</div>

			<Footer />
		</div>
	);
};

const AppWrapper = () => (
	<Router>
		<App />
	</Router>
);

export default AppWrapper;
