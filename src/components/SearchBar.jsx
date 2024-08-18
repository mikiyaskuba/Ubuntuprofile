import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState("");

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSearch = () => {
		onSearch(query);
	};

	return (
		<div className="input-group mb-3">
			<input
				type="text"
				className="form-control"
				placeholder="Search"
				aria-label="Search"
				aria-describedby="basic-addon2"
				value={query}
				onChange={handleInputChange}
			/>
			<div className="input-group-append">
				<span
					className="input-group-text"
					id="basic-addon2"
					onClick={handleSearch}
				>
					Search
				</span>
			</div>
		</div>
	);
};

export default SearchBar;
