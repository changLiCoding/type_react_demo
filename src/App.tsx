import React, { useCallback, useEffect, useState, useRef } from "react";

import List from "./components/List";
import Heading from "./components/Heading";
import Incrementer from "./components/Incrementer";
import Box from "./components/Box";
import {
	useTodosManager,
	useAddTodo,
	useRemoveTodo,
	useTodos,
} from "./hooks/useTodos";
import { useNumber } from "./hooks/useNumber";
import "./App.css";

export type PayLoad = {
	text: string;
};

export const items = ["one", "two", "three"];

function App() {
	const todos = useTodos();
	const addTodo = useAddTodo();
	const removeTodo = useRemoveTodo();

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

const JustShowTodos = () => {
	const todos = useTodos();
	const removeTodo = useRemoveTodo();
	return (
		<div>
			{todos?.map((todo, index) => (
				<Box key={index}>
					{todo.todo}
					<button onClick={() => removeTodo(todo.id)}>Remove</button>
				</Box>
			))}
		</div>
	);
};

const AppWrapper = () => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
			}}>
			<App></App>
			<JustShowTodos />
		</div>
	);
};

export default AppWrapper;
