import gql from "graphql-tag";

export const ALL_GAMES = gql`
	query {
		allGames {
			name
			genres
			platforms
		}
	}
`;
