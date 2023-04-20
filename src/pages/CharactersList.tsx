import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Character, Characters } from "../__generated__/graphql";

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
				id
				name
				image
			}
		}
	}
`;

export default function CharactersList() {
	const { loading, error, data } = useQuery(GET_CHARACTERS);
	if (!loading && !error) {
		console.log(data?.characters?.results as Characters);
	}

	return (
		<div>
			{loading ? <p>Loading...</p> : null}
			{error ? <p>Error</p> : null}
			{data?.characters?.results.map((character: Character) => (
				<div key={character.id}>
					<img src={character.image}></img>
					<h2>{character.name}</h2>
				</div>
			))}
		</div>
	);
}
