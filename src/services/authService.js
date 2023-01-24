import request from "../utils/request";
import responseValidator from "../utils/ResponseValidator";
export const glogin = async (token) => {
    try {

        const response = await request.post("http://localhost:3000/api/v1/auth/glogin", { token });
        return responseValidator(response);

    } catch(error) {
        console.log("glogin error: ", error)
    }
}