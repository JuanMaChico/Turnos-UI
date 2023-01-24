/**
 * @description Input Genérico
 */
import { Root, TextInput } from "./Input.styles";

const Input = (props) => {
	const {
		label = "",

		type = "",

		ref = props.ref,

		value = props.value,

		onChange = () => {}
	} = props;

	return (
		<Root item>
			<TextInput fullWidth type={type} label={label} variant="standard" ref={ref} value={value} onChange={onChange}/>
		</Root>
	);
};

export default Input;
