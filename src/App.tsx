import React from "react";
import { Character, Characters, Query } from "./__generated__/graphql";
import { useQuery } from "@apollo/client";

import { gql } from "./__generated__/gql";

const allCharacters = gql(`
	query {
		characters {
			results {
				name
				status
				species
				gender
				image
				location {
					name
				}
			}
		}
	}
`);
function App() {
	const { loading, error, data } = useQuery(allCharacters);
	return (
		<div className='App'>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}

			<ul>
				{data?.characters.map((character: Character) => (
					<li key={character.name}>{character.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
