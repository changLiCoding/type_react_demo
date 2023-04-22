import { ALL_GAMES } from "./queries";
import { apolloClient } from "../../graphql";
import { Game, UserGame } from "../../__generated__/graphql";

export class GamesService {
	allGames = async (): Promise<Array<Game>> => {
		try {
			const response = await apolloClient.query({
				query: ALL_GAMES,
			});
			console.log(response.data.allGames);

			return response.data.allGames;
		} catch (error) {
			console.error(error);

			return [];
		}
	};
}

export default new GamesService();
