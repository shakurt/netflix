import React, { useState } from "react";

import styles from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
// LOGO
import { ReactComponent as MyLogo } from "../../../assets/images/netflix.svg";

// COMPONENTS
import Container from "../../UI/Container";
import Input from "./Input";

const Login = () => {
	const [showDesc, setShowDesc] = useState(false);
	const [error, setError] = useState(<p className={styles.error}></p>);
	const history = useHistory();

	// FORM SUBMIT
	const formSubmitHandler = (event) => {
		event.preventDefault();
		setError(
			<p className={styles.error}>
				"Incorrect password. Please try again or you can reset your password."
			</p>
		);
		history.push("/movies");
	};

	return (
		<>
			<section className={styles["login-section"]}>
				<Container className={styles.header}>
					<Link to="/">
						<MyLogo fill={"red"} className={styles.logo} />
					</Link>
				</Container>
				<main className={styles.main}>
					<Container className={styles["main-container"]}>
						<h1 className={styles.title}>Sign In</h1>
						<form className={styles.form} onSubmit={formSubmitHandler}>
							{error.length > 1 ? error : undefined}
							<Input type="email" placeHolder="Email" />
							<Input type="password" placeHolder="Password" />
							<button type="submit" className={styles["submit-btn"]}>
								Sign In
							</button>
							<p className={styles.new}>
								New To Netflix?{" "}
								<Link className={styles["new-link"]} to="/">
									Sign Up Now
								</Link>
							</p>
							<p className={styles.desc}>
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.{" "}
								{!showDesc ? (
									<span
										onClick={() => setShowDesc(true)}
										className={styles.learn}
									>
										Learn more.
									</span>
								) : undefined}
							</p>
							{showDesc ? (
								<p className={styles["more-desc"]}>
									The information collected by Google reCAPTCHA is subject to
									the Google{" "}
									<a
										rel="noreferrer"
										href="https://policies.google.com/privacy"
										target={"_blank"}
									>
										Privacy Policy
									</a>
									&nbsp;and&nbsp;
									<a
										rel="noreferrer"
										href="https://policies.google.com/terms"
										target={"_blank"}
									>
										Terms of Service
									</a>
									, and is used for providing, maintaining, and improving the
									reCAPTCHA service and for general security purposes (it is not
									used for personalized advertising by Google).
								</p>
							) : undefined}
						</form>
					</Container>
				</main>
				<footer className={styles.footer}>
					<Container className={styles["footer-container"]}>
						<p className={styles.call}>
							Questions? Call <a href="tel:0800-000-7969">0800-000-7969</a>
						</p>
						<ul className={styles["footer-list"]}>
							<li>FAQ</li>
							<li>Cancel Membership</li>
							<li>Help Center</li>
							<li>Terms of Use</li>
							<li>Privacy</li>
							<li>Cookie Preferences</li>
							<li>Impressum</li>
						</ul>
					</Container>
				</footer>
			</section>
		</>
	);
};

export default Login;
