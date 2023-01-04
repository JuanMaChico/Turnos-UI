import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";import dayjs from 'dayjs';
import { setAppointmentHour } from "../../redux/reducers/appointmentReducer";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

	



function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	"17:30",
	"18:00",
	"18:30",
	"19:00"
];

export default function BasicTable() {
	const dispatch = useDispatch();
	const appointmentHour = useSelector((state) => state.appointmentDate.hour)
	
	const handleClick = (newValue) => {
		dispatch(setAppointmentHour(newValue));
	};

	console.log("el store date", appointmentHour)

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
