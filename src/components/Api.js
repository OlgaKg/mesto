export default class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkReply(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        };
    }

    getUserData() {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    updateUserData(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    updateAvatar(data) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    getCards() {
        return fetch(`${this._baseUrl}cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    addLikeCard(idCard) {
        return fetch(`${this._baseUrl}cards/${idCard}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    removeLikeCard(idCard) {
        return fetch(`${this._baseUrl}cards/${idCard}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => {
                return this._checkReply(res)
            })
    }

    deleteCard(idCard) {
        return fetch(`${this._baseUrl}cards//${idCard}`, {
            method: 'DELETE',
            headers: this._headers
        })
    }
}