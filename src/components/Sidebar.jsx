import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFolder,
	faFileCode,
	faTerminal,
	faImage,
	faFileAlt,
    faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    const navigate = useNavigate();

    const appsData = [
			{ name: "Files", icon: faFolder, route: "/files" },
			{ name: "Code", icon: faFileCode, route: "/code" },
			{ name: "Terminal", icon: faTerminal, route: "/terminal" },
			{ name: "Photos", icon: faImage, route: "/photos" },
            { name: "Documents", icon: faFileAlt, route: "/documents" },
            { name: "PDF", icon: faFilePdf, route: "/pdf" },
    ];

    const handleNavigation = (route) => {
        navigate(route);
    };

	return (
		<aside>
			<nav>
                <ul>
                    {appsData.map((app) => (
                        <li key={app.name} onClick={() => handleNavigation(app.route)}>
                            <FontAwesomeIcon icon={app.icon} size="3x"/>
                        </li>
                    ))}
                </ul>
            </nav>
		</aside>
	);
};

export default Sidebar;
