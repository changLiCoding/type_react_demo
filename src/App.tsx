import React, { useState } from "react";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [username, setUsername] = useState<string>("");

	return (
		<div className='App'>
			<LoginForm
				email={email}
				password={password}
				setEmail={setEmail}
				setPassword={setPassword}
			/>
			<RegisterForm
				email={email}
				password={password}
				username={username}
				setEmail={setEmail}
				setPassword={setPassword}
				setUsername={setUsername}
			/>
		</div>
	);
}

export default App;
