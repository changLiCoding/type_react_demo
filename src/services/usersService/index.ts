import {
	LoginUserPayload,
	RegisterUserPayload,
} from "../../__generated__/graphql";
import { apolloClient } from "../../__generated__";
import { LOGIN, REGISTER } from "./queries";

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

			return response.data.login;
		} catch (error) {
			throw error;
		}
	};
	register = async (
		email: string,
		password: string,
		username: string
	): Promise<RegisterUserPayload | undefined> => {
		try {
			const response = await apolloClient.mutate({
				mutation: REGISTER,
				variables: { email, password, username },
			});
			if (!response || !response.data) throw new Error("No response");
			return response.data.register;
		} catch (error) {}
	};
}
export default new UserService();
