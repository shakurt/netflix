import React, { useContext } from "react";

// CSS
import styles from "./Questions.module.css";

// QUESTION DATA
import questionData from "../../../../../data/questions";

// COMPONENTS
import Container from "../../../../UI/Container";
import QuestionItem from "./QuestionItem";
import EmailInput from "../../../../UI/EmailInput/EmailInput";

// CONTEXT
import languageContext from "../../../../../context/language-context";

const Questions = () => {
	const { english } = useContext(languageContext);
	return (
		<section className={styles.questions}>
			<Container className={styles["questions-container"]}>
				<h2>{english ? "Frequently Asked Questions" : "سوالات متداول"}</h2>
				<section className={styles["questions-section"]}>
					{english
						? questionData.english.map((item) => {
								return (
									<QuestionItem
										key={item.id}
										answer={item.answer}
										title={item.title}
									/>
								);
						  })
						: questionData.persian.map((item) => {
								return (
									<QuestionItem
										key={item.id}
										answer={item.answer}
										title={item.title}
									/>
								);
						  })}
				</section>
				<h4 className={!english ? "persian-text" : undefined}>
					{english
						? "Ready to watch? Enter your email to create or restart your membership."
						: "آماده تماشا هستید؟ برای ایجاد یا راه اندازی مجدد عضویت، ایمیل خود را وارد کنید."}
				</h4>
				<EmailInput className={styles["email-input"]} />
			</Container>
		</section>
	);
};

export default Questions;
