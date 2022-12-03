/**
 * Vista de reserva de turnos para clientes
 */
import { Root, Container, Title } from "./ScheduleShifts.styles";
import GridStepper from "../../components/Stepper/Stepper";

const ScheduleShifts = () => {
	const handleChange = (newValue) => {
		setValue(newValue);
	};

	return (
		<Root item md={12} sm={12} xs={12}>
			<Container>
				<Title variant="h4">
					Reserva tu turno
				</Title>
				<GridStepper/>
			</Container>
		</Root>
	);
};

export default ScheduleShifts;
