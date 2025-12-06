class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handserveresponse(res) {
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.json();
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/deleteCard/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(res => this._handserveresponse(res));
    }

    getallcards() {
        return fetch(`${this._baseUrl}/getAllCards`, {
            headers: this._headers,
        }).then(res => this._handserveresponse(res));
    }
}

const api = new Api(
    "https://dispinteligentes9b-wpi2.onrender.com",
    {
        "Content-Type": "application/json",
    }
);

export default api;
