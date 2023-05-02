export default class UserInfo {
    constructor({ userNameSelector, userProfessionSelector }) {
        this._userNameSelector = userNameSelector;
        this._userProfessionSelector = userProfessionSelector;
    }

    getUserInfo() {
        this._userData = {
            name: this._userNameSelector.textContent,
            about: this._userProfessionSelector.textContent
        };
        return this._userData;
    }

    setUserInfo(userData) {
        console.log(userData)
        this._userNameSelector.textContent = userData.name;
        this._userProfessionSelector.textContent = userData.about;
    }
}