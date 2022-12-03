import { Root, Title } from "./Login.styles";
import Button from "Components/Button/Button";
import Input from 'Components/Input/Input';
import { useNavigate } from "react-router-dom";
import Alerta from '../../components/Alerta/Alerta'


const Login = (props) => {

	const {
		title= "Turnos Online"
	} = props;

	const redirect = useNavigate();

	return (
			<Root item sm={6} md={4}>
				<Title variant="h4">{title}</Title>
				<Input label="Usuario"/>
				<Input type="password" label="Contraseña"/>
				<Button label="Ingresar" click={redirect}/>
				{/* <Alerta/> */}
			</Root>
	);
};

export default Login;
