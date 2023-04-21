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

export const GAMES_FOR_A_USER = gql`
	query {
		gamesForAUser {
			name
			imageURL
			genres
			platforms
		}
	}
`;

export const ADD_USER_GAMES = gql`
  mutation AddUserGames($user_id: Int!, $game_id: Int!) {
    addUserGames(input: $) {
  }`;
