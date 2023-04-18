import React, { useCallback, useState } from "react";
import "./App.css";

export type BoxProps = {
	children: React.ReactNode;
};

const Heading = ({ title }: { title: string }) => {
	return <h2>{title}</h2>;
};

const Box: React.FC<BoxProps> = ({ children }): JSX.Element => (
	<div>{children}</div>
);

const List: React.FC<{
	items: string[];
	onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
	<ul>
		{items.map((item) => (
			<li onClick={() => onClick?.(item)}>{item}</li>
		))}
	</ul>
);

function App() {
	const [count, setCount] = useState<number | string>(0);

	const onListItemClick = useCallback((item: string): void => {
		alert(item);
	}, []);

	return (
		<div className='App'>
			<Heading title='Introduction' />
			<Box>Hello there</Box>
			<List
				items={["one", "two", "three"]}
				onClick={onListItemClick}
			/>
		</div>
	);
}

export default App;
