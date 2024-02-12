import React, { useContext } from "react";

// CSS
import styles from "./Watch.module.css";

// COMPONENTS
import Container from "../../../../UI/Container";

// IMAGES
import tvBorder from "../../../../../assets/images/device-pile.png";
import video from "../../../../../assets/videos/video-devices.m4v";

// CONTEXT
import languageContext from "../../../../../context/language-context";

const Watch = () => {
	const { english } = useContext(languageContext);

	return (
		<section className={styles.watch}>
			<Container className={styles["watch-container"]}>
				<div className={styles["left-watch"]}>
					<h2 className={!english ? "persian-text" : undefined}>
						{english ? "Watch everywhere." : "همه جا تماشا کن."}
					</h2>
					<p className={!english ? "persian-text" : undefined}>
						{english
							? "Stream unlimited movies and TV shows on your phone, tablet, laptop,and TV without paying more."
							: "بدون پرداخت بیشتر، فیلم‌ها و برنامه‌های تلویزیونی نامحدود را در تلفن، تبلت، لپ‌تاپ و تلویزیون خود پخش کنید."}
					</p>
				</div>
				<div className={styles["right-watch"]}>
					<div className={styles["image-container"]}>
						<img src={tvBorder} alt="television border" />
						<div className={styles["video-container"]}>
							<video autoPlay muted loop>
								<source src={video}></source>
							</video>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Watch;
