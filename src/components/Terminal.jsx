// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Terminal.css'

// const Terminal = () => {
// 	const [command, setCommand] = useState("");
// 	const [output, setOutput] = useState([]);
// 	const [commandColor, setCommandColor] = useState("#a9a9a9");
// 	const navigate = useNavigate();

// 	const handleCommand = (e) => {
// 		e.preventDefault();
// 		let color = "#a9a9a9";
// 		const newOutput = [...output, `> ${command}`];

// 		switch (command.toLowerCase()) {
// 			case "home":
// 				navigate("/");
// 				color = "green";
// 				break;
// 			case "about":
// 				navigate("/about");
// 				color = "green";
// 				break;
// 			case "projects":
// 				navigate("/projects");
// 				color = "green";
// 				break;
// 			case "clear":
// 				setOutput([]);
// 				return;
// 			default:
// 				newOutput.push("Error: Command not found");
// 				color = "red";
// 				break;
// 		}

// 		setCommandColor(color);
// 		setOutput(newOutput);
// 		setCommand("");
// 	};

// 	return (
// 		<div className="terminal">
// 			<div className="output">
// 				{output.map((line, index) => (
// 					<div
// 						key={index}
// 						style={{ color: line.startsWith("Error") ? "red" : "green" }}
// 					>
// 						{line}
// 					</div>
// 				))}
// 			</div>
// 			<form onSubmit={handleCommand}>
// 				<input
// 					type="text"
// 					value={command}
// 					onChange={(e) => setCommand(e.target.value)}
// 					placeholder="Enter command..."
// 					style={{ color: commandColor }}
// 					autoFocus
// 				/>
// 			</form>
// 		</div>
// 	);
// };

// export default Terminal;
import React, { useState } from "react";
import "./Terminal.css";

const Terminal = ({ onCommandExecute }) => {
	const [commands, setCommands] = useState([]);
	const [currentCommand, setCurrentCommand] = useState("");

	const handleInputChange = (e) => {
		setCurrentCommand(e.target.value);
	};

	const handleCommandSubmit = (e) => {
		if (e.key === "Enter") {
			const cmd = currentCommand.toLowerCase();
			if (
				cmd === "home" ||
				cmd === "about" ||
				cmd === "contact" ||
				cmd === "projects"
                
			) {
				setCommands([...commands, { text: currentCommand, isValid: true }]);
				onCommandExecute(cmd);
			} else if (cmd === "clear") {
				setCommands([]);
			} else {
				setCommands([...commands, { text: currentCommand, isValid: false }]);
			}
			setCurrentCommand("");
		}
	};

	return (
		<div className="terminal">
			<div className="terminal-header">Terminal</div>
			<div className="terminal-body">
				{commands.map((command, index) => (
					<div key={index} className="terminal-line">
						<span className="terminal-prompt">$</span>
						<span className="terminal-command">{command.text}</span>
						{!command.isValid && (
							<div className="terminal-error">
								Command not recognized: {command.text}
							</div>
						)}
					</div>
				))}
				<div className="terminal-line">
					<span className="terminal-prompt">$</span>
					<input
						type="text"
						value={currentCommand}
						onChange={handleInputChange}
						onKeyDown={handleCommandSubmit}
						className="terminal-input"
						autoFocus
					/>
				</div>
			</div>
		</div>
	);
};

export default Terminal;

