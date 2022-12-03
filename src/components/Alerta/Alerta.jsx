import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Alerta = () => {
	return (
		<Stack sx={{ width: "100%" }} spacing={2}>
			<Alert  variant="outlined" severity="success">Mensaje de Éxito</Alert>
			<Alert  variant="filled" severity="info">Mensaje de Info</Alert>
			<Alert  variant="outlined" severity="warning">Mensaje de Advertencia</Alert>
			<Alert  variant="filled" severity="error">Mensaje de Error</Alert>
		</Stack>
	);
};

export default Alerta;
