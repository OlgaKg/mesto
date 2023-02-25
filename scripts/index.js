import { initialCards } from './initialCards.js';

const editBtn = document.querySelector('.profile__edit-btn-open-popup');
const addImgBtn = document.querySelector('.profile__add-btn');
const popups = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddNewCard = document.querySelector('.popup_type_add-new-card');
const popupPreviewImg = document.querySelector('.popup__preview-image');
const popupTitleImg = document.querySelector('.popup__title-image');
const popupImg = document.querySelector('.popup_type_image');

const formProfile = document.querySelector('.popup__form_profile');
const formCard = document.querySelector('.popup__form_new-card');
const nameInput = document.querySelector(`input[name='user']`);
const professionInput = document.querySelector(`input[name='profession']`);
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');


const template = document.querySelector('.elements__card-template').content.querySelector('.elements__element');
const elementsCards = document.querySelector('.elements');
const createBtn = document.querySelector('.popup__create-btn');
const imageNameInput = document.querySelector(`input[name='image-name']`);
const imageLinkInput = document.querySelector(`input[name='image-link']`);



const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup(popupEditProfile);
}

function handleFormSubmitCard(evt) {
    evt.preventDefault();
    elementsCards.prepend(card);
}

function renderCards() {
    const cards = initialCards.map((item) => {
        return createCard(item);
    });
    elementsCards.prepend(...cards);
}

function createCard(item) {
    const card = template.cloneNode(true);
    card.querySelector('.elements__title').textContent = item.name;
    card.querySelector('.elements__image').alt = item.name;
    card.querySelector('.elements__image').src = item.link;
    card.querySelector('.elements__like-btn').addEventListener('click', (event) => {
        event.target.classList.toggle('elements__like-btn_active');
    });
    card.querySelector('.elements__delete-btn').addEventListener('click', () => {
        card.remove();
    });

    card.querySelector('.elements__image').addEventListener('click', () => {
        popupPreviewImg.src = item.link;
        popupPreviewImg.alt = item.name;
        popupTitleImg.textContent = item.name;
        openPopup(popupImg);
    });
    return card;
}





editBtn.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
});

addImgBtn.addEventListener('click', () => {
    formCard.reset();
    openPopup(popupAddNewCard);
});

createBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const card = createCard({ name: imageNameInput.value, link: imageLinkInput.value });
    elementsCards.prepend(card);
    closePopup(popupAddNewCard);
});

formProfile.addEventListener('submit', handleFormSubmitProfile);
formCard.addEventListener('submit', handleFormSubmitCard);




popups.forEach((element) => {
    element.querySelector('.popup__closed-btn').addEventListener('click', () => {
        closePopup(element);
    });
});

renderCards();




// validation
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
      setEventListeners(formElement);
  });
  };
  
  enableValidation();


