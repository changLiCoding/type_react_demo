// import { items } from "../App";

const List: React.FC<{
	items: string[];
	onClick?: (item: string) => void;
}> = ({
	items,
	onClick,
}: {
	items: string[];
	onClick?: (item: string) => void;
}) => (
	<ul>
		{items.map((item: string, index: number) => (
			<li
				key={index}
				onClick={() => onClick?.(item)}>
				{item}
			</li>
		))}
	</ul>
);

export default List;
