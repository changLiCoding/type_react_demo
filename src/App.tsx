import React, {
	useCallback,
	useEffect,
	useState,
	useReducer,
	useRef,
} from "react";
import "./App.css";

export type BoxProps = {
	children: React.ReactNode;
	onClick?: () => void;
	key?: number;
};
export type PayLoad = {
	text: string;
};
export type Todo = {
	id: number;
	done: boolean;
	todo: string;
};
export type ActionType =
	| { type: "ADD"; todo: string }
	| { type: "REMOVE"; id: number };

const Heading = ({ title }: { title: string }) => {
	return <h2>{title}</h2>;
};

const Box: React.FC<BoxProps> = ({ children }): JSX.Element => (
	<div>{children}</div>
);

const List: React.FC<{
	items: string[];
	onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
	<ul>
		{items.map((item, index) => (
			<li
				key={index}
				onClick={() => onClick?.(item)}>
				{item}
			</li>
		))}
	</ul>
);

function App() {
	const [count, setCount] = useState<number>(0);
	const [payload, setPayload] = useState<PayLoad | null>({
		text: "Inital value",
	});
	const reducer = (todos: Todo[], action: ActionType) => {
		switch (action.type) {
			case "ADD":
				return [...todos, { id: todos.length, done: false, todo: action.todo }];
			case "REMOVE":
				return todos.filter((todo) => todo.id !== action.id);
			default:
				throw new Error();
		}
	};
	const [todos, dispatch] = useReducer(reducer, []);
	const newTodoRef = useRef<HTMLInputElement>(null);
	const addTodo = useCallback(() => {
		dispatch({ type: "ADD", todo: newTodoRef.current?.value ?? "" });
	}, []);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setPayload(data));
	}, []);

	// const onListItemClick = useCallback((item: string): void => {
	// 	alert(item);
	// }, []);
	const onListItemClick = (item: string): void => {
		dispatch({ type: "ADD", todo: item });
		alert(item);
	};
	return (
		<div className='App'>
			<Heading title='Introduction' />
			<Box>Hello there</Box>
			<List
				items={["one", "two", "three"]}
				onClick={onListItemClick}
			/>
			<Box>{payload?.text}</Box>
			{todos?.map((todo, index) => (
				<Box key={index}>
					{todo.todo}
					<button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>
						Remove
					</button>
				</Box>
			))}
			<div>
				<input
					type='text'
					ref={newTodoRef}
				/>
				<button onClick={addTodo}>Add Todo</button>
			</div>
		</div>
	);
}

export default App;
