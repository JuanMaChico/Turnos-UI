import { useRef } from "react";
import { Root, Title, GoogleButtonContainer } from "./Login.styles";
import Button from "Components/Button/Button";
import Input from 'Components/Input/Input';
import { useNavigate } from "react-router-dom";
import Alerta from '../../components/Alerta/Alerta';
import { GoogleLogin } from "@react-oauth/google";
import { glogin, login } from "../../services/authService";	
import Storage from "../../utils/storage";
import { KEYTOKENSTORAGE } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/reducers/userReducer";

const Login = (props) => {

	const {
		title= "Turnos Online"
	} = props;

	const inputUser = useRef();
	const inputPassword = useRef();

	const redirect = useNavigate();
	const dispatch = useDispatch();

	const googleLogin = async (credentialsResponse) => {
		const response =  await glogin(credentialsResponse);
		if(response) {
			Storage.set(KEYTOKENSTORAGE, response.user?.token);
			dispatch(setUserData(response.user))
			redirect("/booking");
		} else {
			alert("Login failed")
		}
	}

	// funcion de loguear con email y contrasña
	async function classicLogin () {
		const credentials = {
			email: inputUser.current,
			password: inputPassword.current
		}
		const response = await login(credentials);
		if(response) {
			Storage.set(KEYTOKENSTORAGE, response.user?.token);
			dispatch(setUserData(response.user))
			redirect("/booking");
		}
		else {
			alert("Login failed")
		}
	}

	return (
			<Root item sm={6} md={4}>
				<Title variant="h4">{title}</Title>
				<Input label="Usuario" ref={inputUser} onChange={(e) => inputUser.current = e.target.value }  />
				<Input type="password" label="Contraseña" ref={inputPassword} onChange={(e) => inputPassword.current = e.target.value }/>
				<Button label="Ingresar" click={classicLogin}/>
				{/* <Alerta/> */}
				<GoogleButtonContainer>
				<GoogleLogin
					onSuccess={ async (credentialsResponse) => {
						await googleLogin(credentialsResponse.credential)
					}}
					onError={ () => console.log("Login Failed")}
					size="large"
				/>
				</GoogleButtonContainer>
			</Root>
	);
};

export default Login;
