import React, { useState } from "react";

export default function Gretrings() {
	const [changedText, setChangedText] = useState(false);
	const changeTextHandler = () => setChangedText(true);

	return (
		<div>
			<h1>Hello Siddharth </h1>
			<h2>How are you? </h2>
			{changedText ? "Billionare" : "Millionare"}
			{"\n"}
			<button onClick={changeTextHandler} className="button">
				Change Text
			</button>
		</div>
	);
}