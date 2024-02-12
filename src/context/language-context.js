import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

const languageContext = createContext({
	language: "english",
	setLanguage: () => {},
	english: true,
});

export const LanguageContextProvider = (props) => {
	const location = useLocation();

	const [language, setLanguage] = useState(
		location.pathname === "/fa/" || location.pathname === "/fa"
			? "persian"
			: "english"
	);

	return (
		<languageContext.Provider
			value={{
				language: language,
				setLanguage: setLanguage,
				english: language === "english" ? true : false,
			}}
		>
			{props.children}
		</languageContext.Provider>
	);
};

export default languageContext;
