/**
 * @description Input Genérico
 */
import { Root, TextInput } from "./Input.styles";

const Input = (props) => {
	const {
		label = "",

		type = "",
	} = props;

	return (
		<Root item>
			<TextInput fullWidth type={type} label={label} variant="standard" />
		</Root>
	);
};

export default Input;
