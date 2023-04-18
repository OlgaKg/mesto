const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_visible',
    cardTemplate: '.elements__card-template',
    cardListSelector: '.elements'
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
const imageNameInput = document.querySelector(`input[name='image-name']`);
const imageLinkInput = document.querySelector(`input[name='image-link']`);

const popupPreviewImg = document.querySelector('.popup__preview-image');
const popupTitleImg = document.querySelector('.popup__title-image');
const popupImg = document.querySelector('.popup_type_image');

export {
    config, editBtn, addImgBtn, closeBtns, popupEditProfile, popupAddNewCard, formProfile, formCard,
    nameInput, professionInput, profileName, profileProfession, elementsCards, imageNameInput, imageLinkInput,
    popupPreviewImg, popupTitleImg, popupImg
};