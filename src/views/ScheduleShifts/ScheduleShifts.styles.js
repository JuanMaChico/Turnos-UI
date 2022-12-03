import { styled, Grid, Typography } from "@mui/material";

export const Title = styled(Typography)`
	margin-top: 25px;
	margin-bottom: 25px;
`;

export const Root = styled(Grid)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
	background-color: #1d2935e1;
	height: 100vh;
`;

export const Container = styled(Grid)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	max-height: 90vh;
`;
