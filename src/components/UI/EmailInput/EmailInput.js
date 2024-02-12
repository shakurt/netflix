import React, { useState, useContext, useRef } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
// CSS
import styles from "./EmailInput.module.css";

// CONTEXT
import languageContext from "../../../context/language-context";

// ICONS
import { AiOutlineRight } from "react-icons/ai";

const EmailInput = (props) => {
	const { english } = useContext(languageContext);
	const [error, setError] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const emailInput = useRef();
	const history = useHistory();
	// PLACEHOLDER CLICK HANDLER
	const placeholderClickHandler = () => {
		emailInput.current.focus();
	};

	// INPUT CLICK HANDLER
	const inputChangeHandler = (event) => {
		if (isFocus && event.target.value.trim().length === 0) {
			english
				? setError("Email is required!")
				: setError("!ایمیل مورد نیاز است");
		} else if (isFocus && event.target.value.trim().length !== 0) {
			setError("");
		}
		setInputValue(event.target.value);
	};

	// SUBMITING FORM
	const submitHandler = async (event) => {
		event.preventDefault();
		if (inputValue.trim().length === 0) {
			english
				? setError("Email is required!")
				: setError("ایمیل مورد نیاز است!");
			return;
		}
		console.log(inputValue);

		// ADD EMAIL TO API
		
		try {
			await axios.post("http://localhost:3001/users",{email:inputValue})
			history.push("/movies/");
		} catch (error) {
			console.log(error);	
		}
		setInputValue("");
		setIsFocus(false);
		
	};

	return (
		<form
			onSubmit={submitHandler}
			className={`${styles["form-section"]} ${props.className}`}
		>
			<div>
				<div className={styles["input-container"]}>
					<input
						onChange={inputChangeHandler}
						type="email"
						name="email"
						value={inputValue}
						ref={emailInput}
						onFocus={() => setIsFocus(true)}
						onBlur={() => (inputValue ? setIsFocus(true) : setIsFocus(false))}
					/>
					<p
						onClick={placeholderClickHandler}
						className={`${styles.placeholder} ${isFocus ? styles.active : ""}`}
					>
						{english ? "Email address" : "آدرس ایمیل"}
					</p>
				</div>

				<p
					className={`${styles.message} ${
						!english ? "persian-text" : undefined
					}`}
				>
					{error}
				</p>
			</div>
			<button type="submit">
				{english ? "Get Started" : "شروع کنید"}
				<span>
					<AiOutlineRight />
				</span>
			</button>
		</form>
	);
};

export default EmailInput;
