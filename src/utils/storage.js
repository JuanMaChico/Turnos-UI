const Storage = {
    set: (key, payload) => {
        localStorage.setItem(key, JSON.stringify(payload));
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    }
}

export default Storage;