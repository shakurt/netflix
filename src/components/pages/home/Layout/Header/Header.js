import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// CONTEXT
import languageContext from "../../../../../context/language-context";

// CSS FILE
import styles from "./Header.module.css";

// IMAGES
import { ReactComponent as MyLogo } from "../../../../../assets/images/netflix.svg";

// COMPONENTS
import Container from "../../../../UI/Container";
import EmailInput from "../../../../UI/EmailInput/EmailInput";
import SelectLanguage from "../../../../SelectLanguage/SelectLanguage";

const Header = () => {
	const { english } = useContext(languageContext);
	const history = useHistory();
	const toLoginPageHandler = () => {
		history.push("/login");
	};

	return (
		<header
			className={`${styles["home-header"]} ${
				!english ? styles["persian-header"] : undefined
			}`}
		>
			<Container className={styles["header-container"]}>
				<section className={styles.nav}>
					{/* LEFT NAVBAR OR LOGO */}
					<div className={styles["left-nav"]}>
						<MyLogo fill={"red"} />
					</div>
					{/* RIGHT NAVBAR */}
					<div className={styles["right-nav"]}>
						<SelectLanguage top={true} />
						<button
							onClick={toLoginPageHandler}
							className={`${styles["sign-in"]}`}
						>
							{english ? "Sign In" : "ورود"}
						</button>
					</div>
				</section>
				<section className={styles.hero}>
					<h2>
						{english
							? "Unlimited movies, TV shows, and more."
							: " فیلم، نمایش تلویزیونی نامحدود و بیشتر"}
					</h2>

					<p>
						{english
							? "Watch anywhere. Cancel anytime."
							: ".هر جا تماشا کن هر زمان خواستید لغو کن"}
					</p>
					<p>
						{english
							? "Ready to watch? Enter your email to create or restart your membership."
							: ".آماده تماشا هستید؟ برای ایجاد یا راه اندازی مجدد عضویت، ایمیل خود را وارد کنید"}
					</p>
					<EmailInput />
				</section>
			</Container>
		</header>
	);
};

export default Header;
