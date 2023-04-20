import { LoginUserPayload } from "../../__generated__/graphql";
import { apolloClient } from "../../main";
import { LOGIN } from "./queries";

export class UserService {
	login = async (
		email: string,
		password: string
	): Promise<LoginUserPayload> => {
		try {
			const response = await apolloClient.mutate({
				mutation: LOGIN,
				variables: { email, password },
			});
			if (!response || !response.data) throw new Error("No response");
			console.log(response.data);

			return response.data;
		} catch (error) {
			throw error;
		}
	};
}
export default new UserService();
