import { useNumber } from "../hooks/useNumber";
import Button from "./Button";

type UserNumberValue = ReturnType<typeof useNumber>[0];
type UserNumberSetValue = ReturnType<typeof useNumber>[1];

const Incrementer: React.FC<{
	value: UserNumberValue;
	setValue: UserNumberSetValue;
}> = ({ value, setValue }) => (
	<Button
		onClick={() => setValue((prv) => prv + 1)}
		title={`Add - ${value}`}
	/>
);

export default Incrementer;
