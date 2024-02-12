import React, { useContext } from "react";

// CSS
import styles from "./Download.module.css";

// ICON
import { CgSoftwareDownload } from "react-icons/cg";

// CONTAINER
import Container from "../../../../UI/Container";

// CONTEXT
import languageContext from "../../../../../context/language-context";

// IMAGES
import character from "../../../../../assets/images/mobile.jpg";
import cover from "../../../../../assets/images/stranger-things-cover.png";

const Download = () => {
	const { english } = useContext(languageContext);
	return (
		<section className={styles.download}>
			<Container className={styles["download-container"]}>
				<div className={styles["left-download"]}>
					<div className={styles["image-container"]}>
						<img src={character} alt="stranger things main character" />
						<div className={styles.box}>
							<div className={styles["left-box"]}>
								<img src={cover} alt="stranger things movie cover" />
								<p>
									Stranger Things
									<span>{english ? "Downloading..." : "...در حال دانلود"}</span>
								</p>
							</div>
							<div className={styles["right-box"]}>
								<CgSoftwareDownload />
							</div>
						</div>
					</div>
				</div>
				<div className={styles["right-download"]}>
					<h2 className={!english ? "persian-text" : undefined}>
						{english
							? "Download your shows to watch offline."
							: "نمایش های خود را برای تماشای آفلاین دانلود کنید."}
					</h2>
					<p className={!english ? "persian-text" : undefined}>
						{english
							? "Save your favorites easily and always have something to watch."
							: "موارد دلخواه خود را به راحتی ذخیره کنید و همیشه چیزی برای تماشا داشته باشید."}
					</p>
				</div>
			</Container>
		</section>
	);
};

export default Download;
