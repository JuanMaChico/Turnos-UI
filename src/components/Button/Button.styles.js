import SendIcon from "@mui/icons-material/Send";
import { styled, Grid, Button } from "@mui/material";

export const Root = styled(Grid)`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 12px;
	margin-top: 25px;
`;

/**
 * @desc Button Generics
 */
export const SendButton = styled(Button)`
	&.MuiButtonBase-root {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 50%;
		@media (max-width: 600px) {
			width: 100%;
		}
	}
`;

/**
 * @desc Icon Send
 */
export const IconSend = styled(SendIcon)``;
