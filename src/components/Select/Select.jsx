/**
 * Vista de reserva de turnos para clientes
 */
import { Root, SelectBox, Items } from "./Select.styles";

const Select = (props) => {
	const { data = ["Hola", "Mundo"] } = props;

	return (
		<Root item md={12} sm={12} xs={12}>
			<h1>select</h1>
		</Root>
	);
};

export default Select;
