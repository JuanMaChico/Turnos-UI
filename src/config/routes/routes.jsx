/**
 *
 */

// Dependencias
import { createBrowserRouter } from "react-router-dom";
//Components
import Home from "../../views/Home/Home";
import ScheduleShifts from "../../views/ScheduleShifts/ScheduleShifts";
import LoginMiddleware, { Login } from "./LoginMiddleware";


const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/",
		element: <LoginMiddleware><Home /></LoginMiddleware>
	},
	{
		path: "/booking",
		element: <LoginMiddleware><ScheduleShifts /></LoginMiddleware>
	}
])

export default router;