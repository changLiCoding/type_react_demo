import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
	return (
		<div className='App'>
			<LoginForm />
			<RegisterForm />
			<Form>
				<Form.Item>
					<Input type='text' />
				</Form.Item>
				<Form.Item>
					<Input type='text' />
				</Form.Item>
				<Form.Item>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
			<form>
				<input type='text' />
				<input type='text' />
				<input type='text' />
				<button type='submit'></button>
			</form>
		</div>
	);
}

export default App;
