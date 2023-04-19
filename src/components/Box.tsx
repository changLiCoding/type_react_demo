export type BoxProps = {
	children: React.ReactNode;
	onClick?: () => void;
	key?: number;
};

const Box: React.FC<BoxProps> = ({ children }): JSX.Element => (
	<div>{children}</div>
);

export default Box;
