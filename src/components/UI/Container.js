import React, { useContext } from "react";
import "./Container.css";

// CONTEXT
import languageContext from "../../context/language-context";

const Container = (props) => {
	const { english } = useContext(languageContext);

	return (
		<div
			className={`container ${english ? "englishFont" : "persianFont"} ${
				props.className
			}`}
		>
			{props.children}
		</div>
	);
};

export default Container;
