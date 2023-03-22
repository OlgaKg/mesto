import initialCards from './initialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_visible',
    cardTemplate: '.elements__card-template'
};

const editBtn = document.querySelector('.profile__edit-btn-open-popup');
const addImgBtn = document.querySelector('.profile__add-btn');
const closeBtns = document.querySelectorAll('.popup__closed-btn');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddNewCard = document.querySelector('.popup_type_add-new-card');

const formProfile = document.querySelector('.popup__form_profile');
const formCard = document.querySelector('.popup__form_new-card');
const nameInput = document.querySelector(`input[name='user']`);
const professionInput = document.querySelector(`input[name='profession']`);
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

const elementsCards = document.querySelector('.elements');
const createBtn = document.querySelector('.popup__create-btn');
const imageNameInput = document.querySelector(`input[name='image-name']`);
const imageLinkInput = document.querySelector(`input[name='image-link']`);

const popupPreviewImg = document.querySelector('.popup__preview-image');
const popupTitleImg = document.querySelector('.popup__title-image');
const popupImg = document.querySelector('.popup_type_image');


const validateEditProfilePopup = new FormValidator(config, popupEditProfile);
const validateAddNewCard = new FormValidator(config, popupAddNewCard);

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
};

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
};

const closePopupEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_opened');
        closePopup(popupOpen);
    }
};

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup(popupEditProfile);
};

function createAndRenderCard(data) {
    const card = new Card(data, config.cardTemplate, handleCardClick);
    const cardElement = card.createCard();
    elementsCards.prepend(cardElement);
};

function renderInitialCards() {
    initialCards.map((item) => {
        createAndRenderCard(item);
    });
};

function handleCardClick(name, link) {
    popupPreviewImg.src = link;
    popupPreviewImg.alt = name;
    popupTitleImg.textContent = name;
    openPopup(popupImg);

};

editBtn.addEventListener('click', () => {
    openPopup(popupEditProfile);
    validateEditProfilePopup.resetInputError();
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
});

addImgBtn.addEventListener('click', () => {
    formCard.reset();
    openPopup(popupAddNewCard);
    validateAddNewCard.disableSaveBtn();
    validateAddNewCard.resetInputError();
});

formCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    createAndRenderCard({ name: imageNameInput.value, link: imageLinkInput.value });
    closePopup(popupAddNewCard);
});

formProfile.addEventListener('submit', handleFormSubmitProfile);

closeBtns.forEach(closeBtn => {
    const popup = closeBtn.closest('.popup');
    popup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget || evt.target === closeBtn) {
            closePopup(popup);
        }
    });
});

renderInitialCards();

validateEditProfilePopup.enableValidation();
validateAddNewCard.enableValidation();