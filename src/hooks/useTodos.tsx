import { useCallback, useReducer, createContext, useContext } from "react";
import { createGlobalState } from "react-use";
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

// const useGlobalTodos = createGlobalState<Todo[]>([
// 	{ id: 0, todo: "Get Up Early", done: false },
// ]);

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

export const TodoProvider: React.FC<{
	initialTodos: Todo[];
	children?: string | JSX.Element | JSX.Element[];
}> = ({ initialTodos, children }) => (
	<TodoContext.Provider value={useTodosManager(initialTodos)}>
		{children}
	</TodoContext.Provider>
);

export const useTodos = (): Todo[] => {
	const { todos } = useContext(TodoContext);
	return todos;
};
export const useAddTodo = (): useTodosManagerResult["addTodo"] => {
	const { addTodo } = useContext(TodoContext);
	return addTodo;
};
export const useRemoveTodo = (): useTodosManagerResult["removeTodo"] => {
	const { removeTodo } = useContext(TodoContext);
	return removeTodo;
};
