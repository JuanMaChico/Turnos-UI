import request from "../utils/request";
import responseValidator from "../utils/ResponseValidator";
import { fakeUser } from "../utils/jsonResponses/jsonAuthResponse";
export const glogin = async (token) => {
    try {

        const response = await request.post("http://localhost:3000/api/v1/auth/glogin", { token });
        return responseValidator(response);

    } catch(error) {
        console.log("glogin error: ", error)
    }
}

export const login = async (credentials) => {
    try {
        return responseValidator(fakeUser);
    } catch(error) {
        console.log("login error: ", error)
    }
}