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
	min-width: 400px;
`;

export const Title = styled(Typography)(({ theme }) => {
	// theme.typography.h4.color = "red";
});

export const GoogleButtonContainer = styled("div")`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;
