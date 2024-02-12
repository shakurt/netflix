import React, { useContext } from "react";

// CSS
import styles from "./Enjoy.module.css";

// CONTAINER
import Container from "../../../../UI/Container";

// IMAGES
import tvBorder from "../../../../../assets/images/tv-border.png";
import video from "../../../../../assets/videos/video-tv.m4v";

// CONTEXT
import languageContext from "../../../../../context/language-context";

const Enjoy = () => {
	const { english } = useContext(languageContext);
	return (
		<section className={styles["enjoy-section"]}>
			<Container className={styles["enjoy-container"]}>
				<div className={styles["left-enjoy"]}>
					<h2 className={!english ? "persian-text" : undefined}>
						{english ? "Enjoy on your TV." : "از تلویزیون خود لذت ببرید."}
					</h2>
					<p className={!english ? "persian-text" : undefined}>
						{english
							? "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-rayplayers, and more."
							: "در تلویزیون‌های هوشمند، پلی‌استیشن، ایکس‌باکس، کروم‌کست، تلویزیون اپل، پخش‌کننده‌های بلوری و موارد دیگر تماشا کنید."}
					</p>
				</div>
				<div className={styles["right-enjoy"]}>
					<div className={styles["image-container"]}>
						<img src={tvBorder} alt="television border" />
						<div className={styles["video-container"]}>
							<video muted autoPlay loop>
								<source src={video} />
							</video>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Enjoy;
