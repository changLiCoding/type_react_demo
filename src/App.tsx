import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import LoginForm from "./pages/LoginForm";
import { gql } from "./__generated__";

interface LoginInput {
	email: string;
	password: string;
}

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
	const LOGIN = gql(`
	  mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        username
        email
      }
      token
      errors
    }
  }`);

	const [login, { data, loading, error }] = useMutation<
		LoginResponse,
		{ input: LoginInput }
	>(LOGIN);

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
