import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
	id: number;
	done: boolean;
	todo: string;
}
export interface TodosSliceState {
	todos: Todo[];
}

export const todosSlice = createSlice({
	name: "todos",
	initialState: { todos: [{ id: 0, done: false, todo: "Get Up Very Early" }] },
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.todos = [
				...state.todos,
				{ id: state.todos.length, done: false, todo: action.payload },
			];
		},
		removeTodo: (state, action: PayloadAction<number>) => {
			state.todos = state.todos.filter(
				(todo: Todo) => todo.id !== action.payload
			);
		},
	},
});

export const { addTodo, removeTodo } = todosSlice.actions;
