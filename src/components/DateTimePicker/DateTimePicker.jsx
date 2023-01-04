/**
 * Componente de pike de fecha
 */

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker, 	esES  } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { setAppointmentDay } from "../../redux/reducers/appointmentReducer";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const DateTimePicker = () => {
	const [value, setValue] = useState(dayjs(dayjs().format('YYYY-MM-DDTHH:mm:ssZ')));
	
	const dispatch = useDispatch();
	const appointmentDay = useSelector((state) => state.appointmentDate.day)
	const appointmentHour = useSelector((state) => state.appointmentDate.hour)
	
	const handleChange = (newValue) => {
		dispatch(setAppointmentDay(newValue.format('DD/MM/YYYY')));
	};

	console.log("el store date", appointmentDay)
	return (
		<div style={{ margin: '20px' }}>
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={esES}
			 localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}>
				<MobileDatePicker
					label="Fecha del turno"
					inputFormat="DD/MM/YYYY"
					value={value}
					onChange={handleChange}
					disablePast={true}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</div>
	);
};

export default DateTimePicker;
