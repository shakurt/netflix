import React, { createContext, useState } from "react";

const loginContext = createContext({
	isLogin: false,
	setLogin: () => {},
});

export const LoginContextProvider = (props) => {
	const [loginStatus, setLoginStatus] = useState(false);

	return (
		<loginContext.Provider
			value={{ isLogin: loginStatus, setLogin: setLoginStatus }}
		>
			{props.children}
		</loginContext.Provider>
	);
};

export default loginContext;
