import React, { useContext } from "react";

// CSS
import styles from "./Footer.module.css";

// COMPONENT
import Container from "../../../../UI/Container";
import SelectLanguage from "../../../../SelectLanguage/SelectLanguage";

// CONTEXT
import languageContext from "../../../../../context/language-context";

// LINKS
import footerLinks from "../../../../../data/footerLinks";

const Footer = () => {
	const { english } = useContext(languageContext);

	const englishCall = (
		<p className={styles.call}>
			Questions? Call <span>(+33) 0805-543-064</span>
		</p>
	);

	const persianCall = (
		<p className={`${styles.call} persian-text`}>
			سوال دارید؟ با شماره ۰۶۴-۵۴۳-۰۸۰۵ (۳۳+) تماس بگیرید.
		</p>
	);

	return (
		<footer
			className={`${styles.footer} ${
				!english ? styles["persian-footer"] : undefined
			}`}
		>
			<Container className={styles["footer-container"]}>
				{english ? englishCall : persianCall}
				<ul className={styles["footer-list"]}>
					{english
						? footerLinks.english.map((item, index) => {
								return (
									<li key={index} className={styles["footer-item"]}>
										{item}
									</li>
								);
						  })
						: footerLinks.persian.map((item, index) => {
								return (
									<li key={index} className={styles["footer-item"]}>
										{item}
									</li>
								);
						  })}
				</ul>
				<SelectLanguage className={styles["footer-select"]} />
				{!english ? <p className={styles.netflix}>ایران نتفلیکس</p> : undefined}
			</Container>
		</footer>
	);
};

export default Footer;
