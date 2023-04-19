import React, { useCallback, useEffect, useState, useRef } from "react";

import List from "./components/List";
import Heading from "./components/Heading";
import Incrementer from "./components/Incrementer";
import { useTodos } from "./hooks/useTodos";
import { useNumber } from "./hooks/useNumber";
import "./App.css";

export type BoxProps = {
	children: React.ReactNode;
	onClick?: () => void;
	key?: number;
};
export type PayLoad = {
	text: string;
};

export const items = ["one", "two", "three"];

const Box: React.FC<BoxProps> = ({ children }): JSX.Element => (
	<div>{children}</div>
);

function App() {
	const { todos, addTodo, removeTodo } = useTodos([
		{
			id: 999,
			todo: "Get Up Early",
			done: false,
		},
	]);

	const [payload, setPayload] = useState<PayLoad | null>({
		text: "Inital value",
	});

	const newTodoRef = useRef<HTMLInputElement>(null);
	// const addTodo = useCallback(() => {
	// 	dispatch({ type: "ADD", todo: newTodoRef.current?.value ?? "" });
	// }, []);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setPayload(data));
	}, []);

	// const onListItemClick = useCallback((item: string): void => {
	// 	alert(item);
	// }, []);
	const onListItemClick = (item: string): void => {
		addTodo(item);
		alert(item);
	};

	const [value, setValue] = useNumber(0);
	return (
		<div className='App'>
			<Heading title='Introduction' />
			<Box>Hello there</Box>
			<List
				items={items}
				onClick={onListItemClick}
			/>
			<Box>{payload?.text}</Box>
			{todos?.map((todo, index) => (
				<Box key={index}>
					{todo.todo}
					<button onClick={() => removeTodo(todo.id)}>Remove</button>
				</Box>
			))}
			<div>
				<input
					type='text'
					ref={newTodoRef}
				/>
				<button onClick={() => addTodo(newTodoRef.current?.value ?? "")}>
					Add Todo
				</button>
			</div>
			<Incrementer
				value={value}
				setValue={setValue}
			/>
		</div>
	);
}

export default App;
