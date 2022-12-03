/**
 * Componente de pike de fecha
 */

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker, 	esES  } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { useState } from 'react';

const DateTimePicker = () => {
	const [value, setValue] = useState(dayjs(dayjs().format('YYYY-MM-DDTHH:mm:ssZ')));
	const handleChange = (newValue) => {
		setValue(newValue);
	};

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
