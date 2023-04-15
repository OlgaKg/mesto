import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPreviewImg = this._popup.querySelector('.popup__preview-image');
        this._popupTitleImg = this._popup.querySelector('.popup__title-image');
    }

    openPopup(name, link) {
        this._popupPreviewImg.src = link;
        this._popupPreviewImg.alt = name;
        this._popupTitleImg.textContent = name;
        super.openPopup();
    }
}