const config = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__save-btn', 
        inputErrorClass: 'popup__input_invalid',
        errorClass: 'popup__input-error_visible' 
      }; 


  const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);  
      inputElement.classList.add(config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(config.errorClass);
    };
    
    const hideInputError = (formElement, inputElement, config) => {
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(config.inputErrorClass);
      errorElement.classList.remove(config.errorClass);
      errorElement.textContent = '';
    };
    
    const checkInputValidity = (formElement, inputElement, config) => {
      if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
      } else {
        hideInputError(formElement, inputElement, config);
      }
    };
    
    const setEventListeners = (formElement, config) => {
      const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
      const buttonSubmit = formElement.querySelector(config.submitButtonSelector);
      toggleButtonState(inputList, buttonSubmit, config);
    
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          checkInputValidity(formElement, inputElement, config);
          toggleButtonState(inputList, buttonSubmit, config);
        });
      });
    };

    const enableValidation = (config) => {
      const formList = Array.from(document.querySelectorAll('.popup'));
      formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(config.formSelector));
        fieldsetList.forEach((fieldset) => {
          setEventListeners(fieldset, config);
        });
      });
    };
    
    const hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };

    const toggleButtonState = (inputList, buttonElement, config) => {
      if (hasInvalidInput(inputList, config)) {
        buttonElement.disabled = true;
      }
      else {
        buttonElement.removeAttribute('disabled', 'disabled');
      }
    };

    enableValidation(config);
