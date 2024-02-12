import React, { useContext } from "react";

// CONTAINER
import Container from "../../../../UI/Container";

// CSS
import styles from "./Kids.module.css";

// IMAGES
import image from "../../../../../assets/images/kids.png";

// CONTEXT
import languageContext from "../../../../../context/language-context";

const Kids = () => {
	const { english } = useContext(languageContext);

	return (
		<section className={styles["kids"]}>
			<Container className={styles["kids-container"]}>
				<div className={styles["left-kids"]}>
					<div className={styles["image-container"]}>
						<img src={image} alt="cartoon kids" />
					</div>
				</div>
				<div className={styles["right-kids"]}>
					<h2 className={!english ? "persian-text" : undefined}>
						{english
							? "Create profiles for kids."
							: "ایجاد پروفایل برای بچه ها."}
					</h2>
					<p className={!english ? "persian-text" : undefined}>
						{english
							? "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
							: "بچه‌ها را با شخصیت‌های مورد علاقه‌شان در فضایی که فقط برای آنها ساخته شده به ماجراجویی بفرستید—رایگان با عضویت خود."}
					</p>
				</div>
			</Container>
		</section>
	);
};

export default Kids;
