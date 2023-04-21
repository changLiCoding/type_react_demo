import { ALL_GAMES } from "./queries";
import { apolloClient } from "../../__generated__";
import { Game } from "../../__generated__/graphql";

export class GamesService {
	allGames = async (): Promise<Game[]> => {
		try {
			const response = await apolloClient.query({
				query: ALL_GAMES,
			});
			console.log(response.data.allGames);

			return response.data;
		} catch (error) {
			console.error(error);
		}
	};
}

export default new GamesService();
