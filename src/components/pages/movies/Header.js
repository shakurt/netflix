import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// CUSTOM HOOKS
import useWidth from "../../../custom/useWidth";

// COMPONENTS
import Container from "../../UI/Container";

// LOGO
import { ReactComponent as NetflixLogo } from "../../../assets/images/netflix.svg";

const Header = () => {
	const width = useWidth();
	return (
		<header className={styles.header}>
			<Container className={styles["header-container"]}>
				<div className={styles["left-header"]}>
					<NetflixLogo fill="red" />
				</div>
				<div className={styles["right-header"]}>
					{width >= 950 ? <h2>UNLIMITED TV SHOWS & MOVIES</h2> : undefined}
					<Link className={styles.join} to={"/"}>
						Join Now
					</Link>
					<Link className={styles.create} to={"/create-movie"}>
						Create Movie Post
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Header;
