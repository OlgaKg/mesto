export default class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    getUser() {
        return fetch(`${this.baseUrl}users/me`, {
            method: 'GET',
            headers: this.headers
        })
        .then(res => {
            return this._checkResponse(res)
        })
    }

    getCards() {
        return fetch(`${this.baseUrl}cards`, {
            method: 'GET',
            headers: this.headers
        })
        .then(res => {
            return this._checkResponse(res)
        })
    }
}

