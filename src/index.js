import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// ROUTER
import { BrowserRouter } from "react-router-dom";

// LOGIN CONTEXT
import { LoginContextProvider } from "./context/login-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<LoginContextProvider>
				<App />
			</LoginContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
