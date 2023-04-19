import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { TodoProvider } from "./hooks/useTodos";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<TodoProvider
			initialTodos={[
				{
					id: 999,
					todo: "Get Up Early",
					done: false,
				},
			]}>
			<Provider store={store}>
				<App />
			</Provider>
		</TodoProvider>
	</React.StrictMode>
);
