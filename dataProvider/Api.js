class Api {
    constructor({ baseURL, headers }) {
        this._baseUrl = baseURL;
        this._header = headers;
    }
}

    getAllCards(){
    return fetch(`${this._baesUrl}/getAllCards`, {
        headers: this._headers,
    }).then(this._handleServeResponse);
    }

const api = new Api({
    baseUrl: "https://vicktor-nagt.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;