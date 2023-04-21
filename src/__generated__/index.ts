import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
export * from "./fragment-masking";
export * from "./gql";

// create an http link
const httpLink = new HttpLink({
	uri: "http://localhost:3000/graphql",
});

// create an auth link
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("token");

	// return the headers to the context so httpLink can read them
	return token
		? { headers: { ...headers, authorization: `Bearer ${token}` } }
		: headers;
});
export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
