/**
 * @desc Material UI V5
 */
import { styled, Stack, Avatar, Tooltip, css, Select, MenuItem } from "@mui/material";

export const Root = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-evenly",
	marginBottom: "25px",
	marginTop: "25px",
}));

export const TooltipText = styled(Tooltip)(({ theme }) => ({}));

export const SelectBox = styled(Select)(({ theme }) => ({}));

export const Items = styled(MenuItem)(({ theme }) => ({}));

export const AvatarItem = styled(Avatar)`
	${(props) =>
		props.selected &&
		css`
			height: 56;
			width: 56;
			border-style: solid;
			border-color: blue;
		`}
`;
