import React from "react";
import LoginComponent from "../../views/Login/Login";
import Home from "../../views/Home/Home";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import Storage from "../../utils/storage";
import { KEYTOKENSTORAGE } from "../../utils/constants";

function LoginMiddleware({children}) {

    const userToken = Storage.get(KEYTOKENSTORAGE);
    
    return(
        <>
            { userToken ? children :  <LoginComponent /> }
        </>
    )
}

export function Login() {
    const userToken = Storage.get(KEYTOKENSTORAGE);
    return(
        <>
            { userToken ? <Home /> :  <LoginComponent /> }
        </>
    )
}


export default LoginMiddleware;