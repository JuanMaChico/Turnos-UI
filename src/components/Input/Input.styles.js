/**
 * @desc Dependencias
 */
import TextField from '@mui/material/TextField';
import { Grid, styled } from '@mui/material';

export const Root = styled(Grid)`
	margin: 1rem 0;
`;

/**
 * @description Text Input Material UI Customs
 */
// export const TextInput = styled(TextField)`
// 	&:before.MuiInput-root {
// 		color: red;
// 	}
// 	& .MuiGrid-root {
// 		justify-content: center;
// 	}
// 	&.MuiFormControl-root {
// 		width: 75%;
// 		justify-content: center;
// 	}
// 	& .MuiFormHelperText-root {
// 		color: #ecf0f1;
// 	}
// 	& label {
// 		color: #ecf0f1;
// 	}
// 	& label.Mui-focused {
// 		color: #ecf0f1;
// 	}
// 	& .MuiInputBase-root {
// 		color: #ecf0f1;
// 	}
// 	& .MuiOutlinedInput-root {
// 		& fieldset {
// 			border-color: #3498db;
// 		}
// 		&:hover fieldset {
// 			border-color: #2980b9;
// 		}
// 		&.Mui-focused fieldset {
// 			border-color: #3498db;
// 		}
// 	}
// 	& label.Mui-disabled {
// 		color: #e3ec617d;
// 	}
// 	& .Mui-disabled {
// 		color: #ffffff78;
// 	}
// 	& .MuiOutlinedInput-root.Mui-disabled {
// 		& fieldset {
// 			border-color: #3498db;
// 		}
// 		&:hover fieldset {
// 			border-color: #3498db;
// 		}
// 		&.Mui-focused fieldset {
// 			border-color: #3498db;
// 		}
// 	}
// `;

export const TextInput = styled(TextField)(({ theme }) => {});
