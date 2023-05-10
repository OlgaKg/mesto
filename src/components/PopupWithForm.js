import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formSelector = formSelector;
        this._inputList = this._formSelector.querySelectorAll('.popup__input');
        this._saveBtn = this._popup.querySelector('.popup__save-btn');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit(this._getInputValues());
        });
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._saveBtn.textContent = 'Сохранение...';
        } else {
            this._saveBtn.textContent = 'Сохранить';
        }
    }

    close() {
        super.close();
        this._formSelector.reset();
    }
}