import React, { useState } from "react";

import LoginForm from "./pages/LoginForm";

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
