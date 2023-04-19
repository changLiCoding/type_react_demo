import { useCallback, useReducer, createContext } from "react";
export type Todo = {
	id: number;
	done: boolean;
	todo: string;
};
export type ActionType =
	| { type: "ADD"; todo: string }
	| { type: "REMOVE"; id: number };

export type useTodosManagerResult = ReturnType<typeof useTodosManager>;

const TodoContext = createContext<useTodosManagerResult>({
	todos: [],
	addTodo: () => {},
	removeTodo: () => {},
});

export function useTodosManager(initialTodos: Todo[]): {
	todos: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: number) => void;
} {
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
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	const addTodo = useCallback((text: string): void => {
		dispatch({ type: "ADD", todo: text });
	}, []);

	const removeTodo = useCallback((id: number): void => {
		dispatch({ type: "REMOVE", id });
	}, []);

	return { todos, addTodo, removeTodo };
}

export const TodoProvider: React.FC<{ initialTodos: Todo[] }> = ({
	initialTodos,
	children,
}) => <TodoContext.Provider>{children}</TodoContext.Provider>;
