/**
 * Dependencias
 */
import { Root, SendButton, IconSend } from "./Button.styles";

const Button = (props) => {
	const {
		//Label del Botón
		label = "",
		//Acción del Botón.
		click = () => {},
	} = props;

	return (
		<Root item>
			<SendButton
				variant="contained"
				color="success"
				onClick={() => {
					click("/home");
				}}
			>
				{label}
				<IconSend />
			</SendButton>
		</Root>
	);
};

export default Button;
