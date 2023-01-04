/**
 *
 */

// Dependencias
import { Routes, Route, createBrowserRouter } from "react-router-dom";
//Components
import Login from "../Login/Login";
import Home from "../Home/Home";
import ScheduleShifts from "../ScheduleShifts/ScheduleShifts";
// Styles
import { Root } from "../../index.styles";

/* const App = () => {
	return (
		<Root container>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/home" element={<Home />}>
					<Route path="booking" element={<ScheduleShifts />} />
				</Route>
				<Route path="*" element={<h1>No puedo Cargar</h1>} />
			</Routes>
		</Root>
	);
}; */

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
