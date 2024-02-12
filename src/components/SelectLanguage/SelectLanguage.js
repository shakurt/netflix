import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// CSS
import styles from "./SelectLanguage.module.css";

// CONTEXT
import languageContext from "../../context/language-context";

// ICON
import { BiPlanet } from "react-icons/bi";

const NewSelect = (props) => {
	// USE ACTIVE
	const [active, setActive] = useState(false);

	// USE CONTEXT
	const { setLanguage, language } = useContext(languageContext);

	// USE HISTORY
	const history = useHistory();

	useEffect(() => {
		const remove = () => {
			setActive(false);
		};

		setTimeout(() => {
			if (active) {
				document.body.addEventListener("click", remove);
			}
		}, 500);
		return () => {
			document.body.removeEventListener("click", remove);
		};
	}, [active]);

	// CLICK HANDLER FUNCTIONS
	const selectedLanguageClickHandler = () => {
		setActive((prev) => {
			return !prev;
		});
	};

	const englishClickHandler = () => {
		setLanguage("english");
		history.push("/");
	};

	const persianClickHandler = () => {
		setLanguage("persian");
		history.push("/fa");
	};

	const showList = props.top ? { top: "100%" } : { top: "-150%" };

	return (
		<div
			className={`${styles.select} ${active ? styles.active : undefined}`}
			onClick={selectedLanguageClickHandler}
		>
			<div className={styles["select-container"]}>
				<span className={styles.icon}>
					<BiPlanet />
				</span>
				<p>{language === "english" ? "English" : "فارسی"}</p>
				<ul style={showList} className={styles["select-languages-list"]}>
					<li onClick={englishClickHandler}>English</li>
					<li onClick={persianClickHandler}>فارسی</li>
				</ul>
			</div>
		</div>
	);
};

export default NewSelect;
