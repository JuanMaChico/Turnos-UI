const post = async (url, bodyPayload) => {
    try {
        const body = JSON.stringify(bodyPayload);
        const result = await fetch(url, {
            method: "POST",
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await result.json();
    
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