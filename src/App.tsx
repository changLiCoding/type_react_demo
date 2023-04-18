import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
	const [data, setData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
			.then((response) =>
				setData((prvData) => [...prvData, ...response.data.results])
			)
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='App'>
			{data.length > 0 ? (
				<ul>
					{data.map((ele) => (
						<li key={ele.id}>{ele.name}</li>
					))}
				</ul>
			) : (
				<ul>LOADING</ul>
			)}
		</div>
	);
}

export default App;
