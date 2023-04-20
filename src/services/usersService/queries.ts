import { gql } from "graphql-tag";

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(input: { email: $email, password: $password }) {
			user {
				name
				id
			}
			errors
		}
	}
`;
