import { gql } from "graphql-tag";

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(input: { email: $email, password: $password }) {
			user {
				username
				email
				id
			}
			errors
			token
		}
	}
`;

export const REGISTER = gql`
	mutation Register($email: String!, $password: String!, $username: String!) {
		register(
			input: { email: $email, password: $password, username: $username }
		) {
			user {
				username
				email
				id
			}
			errors
			token
		}
	}
`;
