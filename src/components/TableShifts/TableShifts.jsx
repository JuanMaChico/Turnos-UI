import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import dayjs from 'dayjs';
import { setAppointmentHour } from "../../redux/reducers/appointmentReducer";
import { useSelector, useDispatch } from 'react-redux';
import { getEmployeeShifts } from "Services/appointmentService.js";
import { useState, useEffect } from 'react';

	



function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [];


export default function BasicTable() {
	const [shifts, setShifts] = useState([]);
	const dispatch = useDispatch();
	const appointmentHour = useSelector((state) => state.appointmentDate.hour);
	const appointmentDate = useSelector((state) => state.appointmentDate.day);
	const appointmentEmployee = useSelector((state) => state.appointmentDate.employee);
	const storeSelected = useSelector((state) => state.userData.store);

	const handleClick = (newValue) => {
		dispatch(setAppointmentHour(newValue));
	};

	const getShifts = async () => {
		const response =  await getEmployeeShifts({store: {"id": 2 }}, appointmentEmployee, appointmentDate);
		setShifts(response.data);
	}
	console.log("los Shifts", shifts)

useEffect(() => {
	getShifts()
}, [])

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 250 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Horario</TableCell>
						<TableCell align="right">Acción</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row}
							</TableCell>
							<TableCell align="right"><button  onClick={() => handleClick(row)}>RESERVAR</button></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
