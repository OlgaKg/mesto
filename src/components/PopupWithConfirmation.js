import Popup from "./Popup"

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setSubmitAction(action) {
        this._funcSubmit = action;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._funcSubmit();
        });
    }
}