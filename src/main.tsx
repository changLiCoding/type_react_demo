import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { TodoProvider } from "./hooks/useTodos";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

import "./index.css";

const client = new ApolloClient({
	uri: "https://anilist.co/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
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
		</ApolloProvider>
	</React.StrictMode>
);
