import React from "react";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import usersService from "../services/usersService";
import { Button, Form, Input } from "antd";

const RegisterForm: React.FC = () => {
	const onFinishFailed = (
		errorInfo: ValidateErrorEntity<{
			email: string;
			password: string;
			username: string;
		}>
	): void => {
		console.log("Failed:", errorInfo);
	};
	const onFinish = async (values: {
		email: string;
		password: string;
		username: string;
	}) => {
		console.log("Received values of form: ", values);
		const register = await usersService.register(
			values.email,
			values.password,
			values.username
		);
		console.log(register);
	};
	const [form] = Form.useForm();
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 8 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 },
		},
	};
	const tailFormItemLayout = {
		wrapperCol: {
			xs: {
				span: 24,
				offset: 0,
			},
			sm: {
				span: 16,
				offset: 8,
			},
		},
	};
	return (
		<div>
			<Form
				{...formItemLayout}
				form={form}
				name='register'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				style={{ maxWidth: 600 }}
				scrollToFirstError>
				<Form.Item
					name='email'
					label='E-mail'
					rules={[
						{
							type: "email",
							message: "The input is not valid E-mail!",
						},
						{
							required: true,
							message: "Please input your E-mail!",
						},
					]}>
					<Input />
				</Form.Item>
				<Form.Item
					name='password'
					label='Password'
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
					hasFeedback>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name='confirm'
					label='Confirm Password'
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue("password") === value) {
									return Promise.resolve();
								}
								return Promise.reject(
									new Error("The two passwords that you entered do not match!")
								);
							},
						}),
					]}>
					<Input.Password />
				</Form.Item>
				<Form.Item
					name='username'
					label='Username'
					tooltip='What do you want others to see your name?'
					rules={[
						{
							required: true,
							message: "Please input your nickname!",
							whitespace: true,
						},
					]}>
					<Input />
				</Form.Item>
				<Form.Item {...tailFormItemLayout}>
					<Button
						type='primary'
						htmlType='submit'>
						Register
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default RegisterForm;
