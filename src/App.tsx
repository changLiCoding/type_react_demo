import React, { useState } from "react";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
	return (
		<div className='App'>
			<LoginForm />
			<RegisterForm />
		</div>
	);
}

export default App;
