import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import "./index.css";

export const apolloClient = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
