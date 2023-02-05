import { DEV_SERVER } from "./constants";
import fakeUser from "./jsonResponses/jsonAuthResponse";

const post = async (url, bodyPayload) => {
    try {
        if(!DEV_SERVER) {
            const body = JSON.stringify(bodyPayload);
            const result = await fetch(url, {
                method: "POST",
                body,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await result.json();
        } else {
            return fakeUser
        }
    } catch(error) {
        console.log(error);
        return {
            error: error,
            message: "Error trying to fetch url"
        }
    }
}


export default {
    post
}