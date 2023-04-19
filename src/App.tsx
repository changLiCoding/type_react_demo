import React, { useCallback, useEffect, useState, useRef } from "react";

import List from "./components/List";
import Heading from "./components/Heading";
import Incrementer from "./components/Incrementer";
import Box from "./components/Box";

import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "./app/store";
import { addTodo, removeTodo } from "./app/features/todoSlice";
import {
	useTodosManager,
	useAddTodo,
	useRemoveTodo,
	useTodos,
} from "./hooks/useTodos";
import { useNumber } from "./hooks/useNumber";
import "./App.css";
import { createGlobalState } from "react-use";
import { Todo, TodosSliceState } from "./app/features/todoSlice";

export type PayLoad = {
	text: string;
};

export const items = ["one", "two", "three"];

function App() {
	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();
	// const todos = useTodos();
	// const addTodo = useAddTodo();
	// const removeTodo = useRemoveTodo();

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
		dispatch(addTodo(item));
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
					<button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
				</Box>
			))}
			<div>
				<input
					type='text'
					ref={newTodoRef}
				/>
				<button
					onClick={() => dispatch(addTodo(newTodoRef.current?.value ?? ""))}>
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
