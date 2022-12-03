/**
 *
 */

// Dependencias
import { Routes, Route } from "react-router-dom";
//Components
import Login from "../Login/Login";
import Home from "../Home/Home";
import ScheduleShifts from "../ScheduleShifts/ScheduleShifts";
// Styles
import { Root } from "./App.styles";

const App = () => {
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
};

export default App;
