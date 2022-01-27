import React, { useState } from "react";
import "../../styles/index.css";
//create your first component
const Home = () => {
	const [onColor, setonColor] = useState("switchOff");
	/*const addStyle = () => {
		setonColor("switchOn");
	};*/

	return (
		<div className="trafficlight">
			<div
				className={"light red onColor"}
				onClick={() => setonColor("switchOn")}></div>
			<div className={"light yellow onColor"} onClick={addStyle}></div>
			<div className={"light green onColor"} onClick={addStyle}></div>
		</div>
	);
};

export default Home;
