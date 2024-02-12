import React from "react";
import { Link } from "react-router-dom";
// CSS
import styles from "./NotFound.module.css";

// CONTAINER
import Container from "../../UI/Container";

// LOGO
import { ReactComponent as Logo } from "../../../assets/images/netflix.svg";

const NotFound = () => {
	return (
		<section className={styles["notFound"]}>
			<section className={styles["notFound-header"]}>
				<Container>
					<Logo width={100} fill={"red"} />
				</Container>
			</section>
			<section className={styles["notFound-main"]}>
				<Container className={styles["notfound-container"]}>
					<h2>Lost your way?</h2>
					<p>
						Sorry, we can't find that page. You'll find lots to explore on the
						home page.
					</p>
					<Link className={styles["home-link"]} to={"/"}>
						Netflix Home
					</Link>
					<p className={styles.error}>
						Error Code <span>NSES-404</span>
					</p>
				</Container>
			</section>
			<p className={styles["creator"]}>
				<span>from</span> " ShakStick "
			</p>
		</section>
	);
};

export default NotFound;
