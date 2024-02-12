import React from "react";
import Enjoy from "./Layout/Enjoy/Enjoy";

// CONPONENTS
import Header from "./Layout/Header/Header";
import Watch from "./Layout/Watch/Watch";
import Download from "./Layout/Download/Download";
import Kids from "./Layout/Kids/Kids";
import Questions from "./Layout/Questions/Questions";
import Footer from "./Layout/Footer/Footer";

// CONTEXT PROVIDER
import { LanguageContextProvider } from "../../../context/language-context";

function Home() {
	return (
		<LanguageContextProvider>
			<Header />
			<Enjoy />
			<Download />
			<Watch />
			<Kids />
			<Questions />
			<Footer />
		</LanguageContextProvider>
	);
}

export default Home;
