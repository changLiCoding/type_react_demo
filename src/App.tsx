import React, { useState } from "react";

import LoginForm from "./pages/LoginForm";

interface LoginResponse {
	login: {
		user: {
			id: string;
			username: string;
			email: string;
		};
		token: string;
		errors: string[] | null;
	};
}

function App() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<div className='App'>
			<LoginForm
				email={email}
				password={password}
				setEmail={setEmail}
				setPassword={setPassword}
			/>
		</div>
	);
}

export default App;
