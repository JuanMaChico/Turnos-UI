import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			light: "#6b4dff",
			main: "#1f1fcf",
			dark: "#00009c",
			contrastText: "#ffffff",
		},
		secondary: {
			light: "#3498DB",
			main: "#2980B9",
			dark: "#2C3E50",
			contrastText: "#3498DB",
		},
		error: {
			light: "#DB073D",
			main: "#DB073D",
			dark: "#DB073D",
			contrastText: "#DB073D",
		},
		text: {
			primary: "#0fb9e4",
			main: "#2980B9",
			dark: "#ffffff",
			icon: "#0fb9e4",
			primaryChannel: "#0fb9e4",
			secondaryChannel: "#0fb9e4",
		},
	},
	typography: {
		h1: {
			color: "#3498DB",
			fontWeight: 500,
			fontStyle: "italic",
		},
		h4: {
			color: "#3498DB",
			fontWeight: 500,
			fontStyle: "italic",
		},
		body1: {
			color: "#3498DB",
			fontWeight: 500,
		},
	},
	components:{
		MuiButtonBase:{
			defaultProps:{
				style:{
					
				}
			}
		}
	}
});


export const ThemeConfig = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
