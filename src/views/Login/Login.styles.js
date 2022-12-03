/**
 * Dependencias
 */
import { Grid, Typography, styled } from "@mui/material";

export const Root = styled(Grid)`
	justify-content: center;
	align-content: center;
	text-align: center;
	vertical-align: center;
	background-color: #1d2935e1;
	padding: 2rem;
	border-radius: 2rem;
`;

export const Title = styled(Typography)(({ theme }) => {
	// theme.typography.h4.color = "red";
});
