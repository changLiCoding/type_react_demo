import React, { useState } from "react";
import usersService from "../services/usersService";

const useLoginForm = (initialValue: string) => {
	return useState<string>(initialValue);
};

type UseLoginForm = ReturnType<typeof useLoginForm>;

const LoginForm: React.FC<{
	email: UseLoginForm[0];
	password: UseLoginForm[0];
	setEmail: UseLoginForm[1];
	setPassword: UseLoginForm[1];
}> = ({ email, password, setEmail, setPassword }) => {
	return (
		<div>
			<form
				action='post'
				onSubmit={(e) => {
					e.preventDefault();
					const login = usersService.login(email, password);
					console.log(login);
				}}>
				<input
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
