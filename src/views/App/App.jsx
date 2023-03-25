/**
 *
 */

// Dependencias
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
//Components
import Login from '../Login/Login';
import Home from '../Home/Home';
import ScheduleShifts from '../ScheduleShifts/ScheduleShifts';
import Profile from '../Profile/Profile';

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/booking',
		element: <ScheduleShifts />,
	},
	{
		path: '/profile',
		element: <Profile />,
	},
]);

export default router;
