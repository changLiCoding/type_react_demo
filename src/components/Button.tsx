const Button: React.FC<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> & {
		title?: string;
	}
> = ({ title, children, style, ...rest }) => (
	<button
		{...rest}
		style={{ ...style, background: "blue", fontSize: "xx-large" }}>
		{title ?? children}
	</button>
);

export default Button;
