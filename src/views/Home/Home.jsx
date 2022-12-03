import AppBar from "Components/AppBar/AppBar";
import { Root } from "./Home.styles";
import { Outlet } from "react-router-dom";


const Home = () => {
	return (
		<Root item md={12} sm={12} xs={12}>
			<AppBar />
			<Outlet />
		</Root>
	);
};

export default Home;
