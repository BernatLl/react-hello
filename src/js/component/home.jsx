import React, { useState } from "react";
import "../../styles/index.css";
//create your first component
const Home = () => {
	const [onColor, setonColor] = useState("red");

	return (
		<div className="trafficlight">
			<div className="light red switchOn"></div>
			<div className="light yellow"></div>
			<div className="light green"></div>
		</div>
	);
};

export default Home;
