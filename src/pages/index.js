import initialCards from '../components/initialCards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
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
        const cardElement = createAndRenderCard(item);
        defaultCardList.addItem(cardElement);
    }
}, config.cardTemplate);
defaultCardList.renderedItems();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_type_add-new-card',
    formSelector: formCard,
    handleFormSubmit: () => {
        createAndRenderCard({
            name: imageNameInput.value,
            link: imageLinkInput.value
        })
    }
});
popupAddCard.setEventListeners();

const popupProfile = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    formSelector: formCard,
    handleFormSubmit: (formData) => {
        userInfo.setUserInfo(formData),
            popupProfile.closePopup()
    }
});
popupProfile.setEventListeners();

const userInfo = new UserInfo({
    userNameSelector: profileName,
    userProfessionSelector: profileProfession
});

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.user/* textContent*/ = nameInput.value;
    profileProfession.profession/* textContent*/ = professionInput.value;
    popupProfile.closePopup();
};

function createAndRenderCard(data) {
    const card = new Card(data, config.cardTemplate, {
        handleCardClick: (name, link) => {
            popupWithImage.openPopup(name, link)
        },
    });
    const cardElement = card.createCard();
    elementsCards.prepend(cardElement);
};

// function renderInitialCards() { ///нужна ли эта функция???
//     initialCards.map((item) => {
//         createAndRenderCard(item);
//     });
// };

editBtn.addEventListener('click', () => {
    popupProfile.openPopup();
    popupProfile.setInputValues(userInfo.getUserInfo());
    validateEditProfilePopup.resetInputError();
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
});

addImgBtn.addEventListener('click', () => {
    // formCard.reset();
    popupAddCard.openPopup();
    validateAddNewCard.disableSaveBtn();
    validateAddNewCard.resetInputError();
});

formCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // createAndRenderCard({ name: imageNameInput.value, link: imageLinkInput.value });
    popupAddCard.closePopup();
});

formProfile.addEventListener('submit', handleFormSubmitProfile);

// renderInitialCards();

validateEditProfilePopup.enableValidation();
validateAddNewCard.enableValidation();