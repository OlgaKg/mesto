export default class UserInfo {
    constructor({ userNameSelector, userProfessionSelector }) {
        this._userNameSelector = userNameSelector;
        this._userProfessionSelector = userProfessionSelector;
    }

    getUserInfo() {
        this._userData = {
            user: this._userNameSelector.textContent,
            profession: this._userProfessionSelector.textContent
        };
        return this._userData;
    }

    setUserInfo(userData) {
        this._userNameSelector.textContent = userData.user;
        this._userProfessionSelector.textContent = userData.profession;
    }
}