import React, { useState } from "react";

import styles from "./Input.module.css";

const Input = (props) => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [type, setType] = useState("password");
	const [active, setActive] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const showPasswordHandler = () => {
		setType((prev) => {
			if (prev === "text") {
				return "password";
			} else if (prev === "password") {
				return "text";
			}
		});
		setPasswordVisibility((prev) => !prev);
	};

	return (
		<section className={styles["input-section"]}>
			<input
				type={props.type === "email" ? props.type : type}
				className={`${styles.input} ${active ? styles.active : undefined} ${
					inputValue !== 0 ? styles["active-bg"] : undefined
				}`}
				onFocus={() => {
					setActive(true);
				}}
				onBlur={() => {
					inputValue.length === 0 && setActive(false);
				}}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<span className={styles.placeholder}>{props.placeHolder}</span>
			{props.type === "password" ? (
				<button className={styles.show} onClick={showPasswordHandler}>
					{passwordVisibility ? "Hide" : "Show"}
				</button>
			) : undefined}
		</section>
	);
};

export default Input;
