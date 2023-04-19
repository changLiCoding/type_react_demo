import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { todosSlice } from "./features/todoSlice";

const store = configureStore({
	reducer: {
		todos: todosSlice.reducer,
	},
});

type RootState = ReturnType<typeof store.getState>;
export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	RootState,
// 	unknown,
// 	Action<string>
// >;
