import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import SelectAvatar from "../SelectAvatar/SelectAvatar";
import DateTimePicker from "../DateTimePicker/DateTimePicker";
import TableShifts from '../TableShifts/TableShifts'


const steps = [
	{
		label: "Selecciona Fecha de tu preferencia",
		description: "Selecciona la fecha en la que quieras atenderte",
		StepContent: <DateTimePicker />,
		optional: "25/11/2022",
	},
	{
		label: "Selecciona Profesional",
		description: `Selecciona un Profesional con el que desees atenderte`,
		StepContent: <SelectAvatar />,
	},
	
	{
		label: "Seleccione la Hora en la que desea asistir",
		description: `Los horarios se encuentran sujetos a disponibilidad del profesional`,
		optional: "Final",
		StepContent: <TableShifts />,
	},
];

export default function VerticalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ maxWidth: 400, display: "flex" }}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								index === 2 ||index === 1 ? (
									<Typography variant="caption">{step.optional}</Typography>
								) : null
							}
						>
							{step.label}
						</StepLabel>
						<StepContent>
							<Typography>{step.description}</Typography>
							<div>{step.StepContent}</div>
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										{index === steps.length - 1 ? "Finalizar" : "Continuar"}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										Volver
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={4} sx={{ p: 3 }}>
					<Typography>Su turno fue reservado con éxito</Typography>
					<Typography>Viernes 25 de Noviembre a 18hs</Typography>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Confirmar
					</Button>
				</Paper>
			)}
		</Box>
	);
}
