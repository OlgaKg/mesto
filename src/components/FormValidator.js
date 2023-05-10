export default class FormValidator {
    constructor(config, formElement) {
        this.config = config;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this.config.inputSelector));
        this._buttonElement = this._formElement.querySelector(this.config.submitButtonSelector);
    }

    _showInputError(_formElement, _inputElement, _errorMessage) {
        const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(this.config.inputErrorClass);
        _errorElement.textContent = _errorMessage;
        _errorElement.classList.add(this.config.errorClass);
    }

    _hideInputError(_formElement, _inputElement) {
        const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(this.config.inputErrorClass);
        _errorElement.classList.remove(this.config.errorClass);
        _errorElement.textContent = '';
    }

    _сheckInputValidity(_formElement, _inputElement, config) {
        if (!_inputElement.validity.valid) {
            this._showInputError(_formElement, _inputElement, _inputElement.validationMessage);
        } else {
            this._hideInputError(_formElement, _inputElement);
        }
    }

    _setEventListeners(_formElement, config) {
        this._toggleButtonState(this._inputList, config);

        this._inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._сheckInputValidity(_formElement, _inputElement, config);
                this._toggleButtonState(this._inputList, this._buttonElement, config);
            });
        });
    }

    _hasInvalidInput(_inputList) {
        return _inputList.some((_inputElement) => {
            return !_inputElement.validity.valid;
        });
    }

    _toggleButtonState(_inputList, _buttonElement, config) {
        if (this._hasInvalidInput(_inputList, config)) {
            this._buttonElement.disabled = true;
        }
        else {
            this._buttonElement.removeAttribute('disabled', 'disabled');
        }
    }

    disableSaveBtn() {
        this._buttonElement.disabled = true;
    }

    resetInputError() {
        this._inputList.forEach((_inputElement) => {
            const _errorElement = this._formElement.querySelector(`.${_inputElement.id}-error`);
            _inputElement.classList.remove(this.config.inputErrorClass);
            _errorElement.classList.remove(this.config.errorClass);
            _errorElement.textContent = '';
        });
    }

    resetFormValidation() {
        this.disableSaveBtn();
        this.resetInputError();
    }

    enableValidation() {
        this._setEventListeners(this._formElement, this.config);
    }
}
