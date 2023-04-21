import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./__generated__";
import { ConfigProvider } from "antd";

import "antd/dist/reset.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#00b96b",
					},
				}}></ConfigProvider>
			<App />
		</ApolloProvider>
	</React.StrictMode>
);
