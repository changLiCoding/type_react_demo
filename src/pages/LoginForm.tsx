import React, { useState } from "react";
import usersService from "../services/usersService";
import gamesService from "../services/gamesService";
import { Button, Checkbox, Form, Input } from "antd";

const useLoginForm = (initialValue: string) => {
	return useState<string>(initialValue);
};

export type UseLoginForm = ReturnType<typeof useLoginForm>;

const LoginForm: React.FC = () => {
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<div>
			<Form
				action='post'
				name='basic'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={async (values) => {
					const login = await usersService.login(values.email, values.password);
					localStorage.setItem("token", login.token);
					const games = await gamesService.allGames();
					console.log(games);
				}}
				onFinishFailed={onFinishFailed}
				autoComplete='off'>
				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: "Please input your email!" }]}>
					<Input type='text' />
				</Form.Item>
				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: "Please input your password!" }]}>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name='remember'
					valuePropName='checked'
					wrapperCol={{ offset: 8, span: 16 }}>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button
						type='primary'
						htmlType='submit'>
						Submit
					</Button>
				</Form.Item>{" "}
			</Form>
		</div>
	);
};

export default LoginForm;
