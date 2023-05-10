export default class UserInfo {
    constructor({ userNameSelector, userProfessionSelector, userAvatarSelector }) {
        this._userNameSelector = userNameSelector;
        this._userProfessionSelector = userProfessionSelector;
        this._userAvatarSelector = userAvatarSelector;
    }

    getUserInfo() {
        this._userData = {
            name: this._userNameSelector.textContent,
            about: this._userProfessionSelector.textContent,
            avatar: this._userAvatarSelector.src
        };
        return this._userData;
    }

    setUserInfo(userData) {
        this._userNameSelector.textContent = userData.name;
        this._userProfessionSelector.textContent = userData.about;
        this._userAvatarSelector.src = userData.avatar;
    }
}