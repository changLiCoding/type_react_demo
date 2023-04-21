import React from "react";
import { UseLoginForm } from "./LoginForm";
import { RegisterUserInput } from "../__generated__/graphql";

const RegisterForm: React.FC<{
	setUsername: UseLoginForm[1];
	setPassword: UseLoginForm[1];
	setEmail: UseLoginForm[1];
	email: UseLoginForm[0];
	username: UseLoginForm[0];
	password: UseLoginForm[0];
}> = ({ email, password, username, setUsername, setPassword, setEmail }) => {
	return <div></div>;
};

export default RegisterForm;
