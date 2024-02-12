import React, { useState, useContext } from "react";

// MOTION
import { motion, AnimatePresence } from "framer-motion";

// CSS
import styles from "./QuestionItem.module.css";

// ICON
import { AiOutlinePlus } from "react-icons/ai";

// CONTEXT
import languageContext from "../../../../../context/language-context";

const QuestionItem = ({ answer, title }) => {
	const [open, setOpen] = useState(false);

	const { english } = useContext(languageContext);

	const variants = {
		hidden: {
			padding: 0,
			marginBottom: 0,
			height: 0,
			y: "-10px",
			opacity: 0,
			zIndex: -1,
		},
		visible: {
			padding: ".5rem",
			marginBottom: "0.5rem",
			height: "auto",
			y: 0,
			opacity: 1,
			zIndex: 1,
			transition:{
				type:"tweek"
			}
		},
	};

	return (
		<section className={styles.question}>
			<div
				onClick={() => setOpen((prev) => !prev)}
				className={`${styles["question-header"]} ${
					open ? styles.active : undefined
				} ${!english ? "persian-text" : undefined}`}
			>
				<h3
					className={`${styles.title} ${!english ? "persian-text" : undefined}`}
				>
					{title}
				</h3>
				<div className={styles.icon}>
					<AiOutlinePlus />
				</div>
			</div>
			<AnimatePresence>
				<motion.div
					variants={variants}
					initial="hidden"
					animate={open ? "visible" : undefined}
					exit="hidden"
					className={`${styles.body}`}
				>
					<div>{answer}</div>
				</motion.div>
			</AnimatePresence>
		</section>
	);
};

export default QuestionItem;
