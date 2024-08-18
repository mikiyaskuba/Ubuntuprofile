import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFolder,
	faFileCode,
	faTerminal,
	faImage,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";



import "./Menu.css";
const Menu = ({ onTerminalClick }, { onContactClick }) => {
	const appsData = [
		{ name: "Projects", icon: faFolder },
		{ name: "Code", icon: faFileCode },
		{ name: "Terminal", icon: faTerminal },
		{ name: "Photos", icon: faImage },
		{ name: "Contact", icon: faEnvelope },
	];
	const [isOpen, setIsOpen] = useState(false);
	const [apps, setApps] = useState(appsData);
	const [filteredApps, setFilteredApps] = useState(appsData);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const handleSearch = (query) => {
		const lowerCaseQuery = query.toLowerCase();
		setFilteredApps(
			apps.filter((app) => app.name.toLowerCase().includes(lowerCaseQuery))
		);
	};
	const handleAppClick = (app) => {
		if (app.name === "Terminal") {
			onTerminalClick();
		} else if (app.name === "Contact") {
			onContactClick();
		}
	};
	return (
		<div>
			<div className="menu-icon" onClick={toggleMenu}>
				<span>&#9776;</span>
			</div>
			{isOpen && (
				<div className="menu">
					<SearchBar onSearch={handleSearch} />
					<div className="app-icons">
						{filteredApps.map((app, index) => (
							<div
								key={index}
								className="app-icon"
								onClick={() => handleAppClick(app)}
							>
								<FontAwesomeIcon icon={app.icon} size="2x" />
								<div>{app.name}</div>
							</div>
						))}
					</div>
					{/* <div className="app-icons">
						<div className="app-icon">App 1</div>
						<div className="app-icon">App 2</div>
						<div className="app-icon">App 3</div>
						<div className="app-icon">App 4</div>
					</div> */}
				</div>
			)}
		</div>
	);
};

export default Menu;
