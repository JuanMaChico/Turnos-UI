/**
 * App Bar Mobile
 */

// styles
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const mobileBar = (props) => {
	const { title = 'Turnos Online' } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const redirect = useNavigate();

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleClick}
							onClose={handleClose}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							{title}
						</Typography>
						<Button
							color="inherit"
							onClick={() => {
								handleClose();
								redirect('/login');
							}}
						>
							Login
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<div>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem
						onClick={() => {
							handleClose();
							redirect('profile');
						}}
					>
						Perfil
					</MenuItem>
					<MenuItem
						onClick={() => {
							handleClose();
							redirect('booking');
						}}
					>
						Reservar Turno
					</MenuItem>
					<MenuItem onClick={handleClose}>Cancelar Turno</MenuItem>
					<MenuItem onClick={handleClose}>Lista de Precios</MenuItem>
				</Menu>
			</div>
		</>
	);
};

export default mobileBar;
