import './index.css';
import initialCards from '../utils/initialCards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
    config, editBtn, addImgBtn, closeBtns, popupEditProfile, popupAddNewCard, formProfile, formCard,
    nameInput, professionInput, profileName, profileProfession, elementsCards, imageNameInput, imageLinkInput,
    popupPreviewImg, popupTitleImg, popupImg
} from '../utils/constants.js';

const validateEditProfilePopup = new FormValidator(config, popupEditProfile);
const validateAddNewCard = new FormValidator(config, popupAddNewCard);

const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const cardElement = renderCard(item);
    }
}, config.cardListSelector);
defaultCardList.renderedItems();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_type_add-new-card',
    formSelector: formCard,
    handleFormSubmit: (data) => {
        renderCard(data)
    }
});
popupAddCard.setEventListeners();

const userInfo = new UserInfo({
    userNameSelector: profileName,
    userProfessionSelector: profileProfession
});

const popupProfile = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    formSelector: formProfile,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data)
    }
});
popupProfile.setEventListeners();

function renderCard(data) {
    const card = new Card(data, config.cardTemplate, {
        handleCardClick: (name, link) => {
            popupWithImage.open(name, link)
        },
    });
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement);
    return cardElement;
};

editBtn.addEventListener('click', () => {
    popupProfile.open();
    popupProfile.setInputValues(userInfo.getUserInfo());
    validateEditProfilePopup.resetInputError();
});

addImgBtn.addEventListener('click', () => {
    popupAddCard.open();
    validateAddNewCard.disableSaveBtn();
    validateAddNewCard.resetInputError();
});

validateEditProfilePopup.enableValidation();
validateAddNewCard.enableValidation();