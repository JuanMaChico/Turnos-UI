/**
 *
 */

// Dependencias
import { createBrowserRouter } from "react-router-dom";
//Components
import Login from "../../views/Login/Login";
import Home from "../../views/Home/Home";
import ScheduleShifts from "../../views/ScheduleShifts/ScheduleShifts";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/booking",
		element: <ScheduleShifts />
	}
])

export default router;