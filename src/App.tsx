import React from "react";
import { useQuery } from "@apollo/client";
import CharactersList from "./pages/CharactersList";
import { gql } from "./__generated__/gql";
import { Character } from "./__generated__/graphql";

function App() {
	return (
		<div className='App'>
			<CharactersList />
		</div>
	);
}

export default App;
