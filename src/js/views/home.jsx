import React, { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {
	const [glow, setGlow] = useState("off");
	const glowOn = () => {
		setGlow("on");
	};
	return (
		<div className="trafficlight">
			<div className={"light red glow"} onClick={()=>glowOn()}></div>
			<div className={"light yellow glow"}></div>
			<div className={"light green glow"}></div>
		</div>
	);
};

export default Home;
