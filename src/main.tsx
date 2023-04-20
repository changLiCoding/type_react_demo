import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./index.css";

const client = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
