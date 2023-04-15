import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, formSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formSelector = formSelector;
        this._inputList = this._formSelector.querySelectorAll('.popup__input');
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
            this._handleFormSubmit(this._getInputValues());
            this.closePopup();
        });
    }

    closePopup() {
        super.closePopup();
        this._formSelector.reset();
    }
}