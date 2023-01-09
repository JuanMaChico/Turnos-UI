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
        console.log(result)
        return await result.json();
    
    } catch(error) {
        console.log(error);
        return {
            error: error,
            msg: "Error trying to fetch url"
        }
    }
}

export default {
    post
}