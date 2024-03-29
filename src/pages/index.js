import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    config, editBtn, addImgBtn, closeBtns, popupEditProfile, popupAddNewCard, formProfile, formCard,
    nameInput, professionInput, profileName, profileProfession, elementsCards, imageNameInput, imageLinkInput,
    popupPreviewImg, popupTitleImg, popupImg, profileAvatar, formAvatarUpdate, editAvatarBtn
} from '../utils/constants.js';
import { data } from 'browserslist';
let userId = null;

const validateAvatarUpdatePopup = new FormValidator(config, formAvatarUpdate);
const validateEditProfilePopup = new FormValidator(config, popupEditProfile);
const validateAddNewCard = new FormValidator(config, popupAddNewCard);

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65/',
    headers: {
        authorization: '36c21e13-089d-4ac8-bd26-b85419c729aa',
        'Content-Type': 'application/json'
    }
});

Promise.all([api.getUserData(), api.getCards()])
    .then(([userData, initialCards]) => {
        userId = userData._id;
        userInfo.setUserInfo({ name: userData.name, about: userData.about, avatar: userData.avatar });
        defaultCardList.renderItems(initialCards.reverse());
    }).catch((err) => {
        console.log(err);
    });

const defaultCardList = new Section({
    data: {},
    renderer: (item) => {
        const cardElement = renderCard(item);
    }
}, config.cardListSelector);

const popupWithImage = new PopupWithImage('.popup_type_image');
const popupWithConfirmation = new PopupWithConfirmation('.popup_type_confirm');

const popupAddCard = new PopupWithForm({
    popupSelector: '.popup_type_add-new-card',
    formSelector: formCard,
    handleFormSubmit: (data) => {
        api.addNewCard(data)
            .then((res) => {
                renderCard(res);
                popupAddCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupAddCard.renderLoading(false);
            })
    }
});

const userInfo = new UserInfo({
    userNameSelector: profileName,
    userProfessionSelector: profileProfession,
    userAvatarSelector: profileAvatar
});

const popupProfile = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    formSelector: formProfile,
    handleFormSubmit: (data) => {
        api.updateUserData(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                popupProfile.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupProfile.renderLoading(false);
            });
    }
});

const popupAvatarUpdate = new PopupWithForm({
    popupSelector: '.popup_type_update-avatar',
    formSelector: formAvatarUpdate,
    handleFormSubmit: (data) => {
        api.updateAvatar(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                popupAvatarUpdate.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupAvatarUpdate.renderLoading(false);
            });
    }
});

function renderCard(data) {
    const card = new Card(data, config.cardTemplate, userId, {
        handleCardClick: (name, link) => {
            popupWithImage.open(name, link)
        },
        handleCardLike: handleCardLike,
        handleCardDelete: handleCardDelete
    });
    const cardElement = card.createCard();
    defaultCardList.addItem(cardElement);
    return cardElement;
}

function handleCardLike(card) {
    if (card.isLiked()) {
        api.removeLikeCard(card.idCard)
            .then((res) => {
                card.removeLike();
                card.countLikes(res);
            }).catch((err) => console.log(`Ошибка: ${err}`))
    } else {
        api.addLikeCard(card.idCard)
            .then((res) => {
                card.addLike();
                card.countLikes(res);
            }).catch((err) => console.log(`Ошибка: ${err}`))
    }
}

function handleCardDelete(card) {
    popupWithConfirmation.open();
    popupWithConfirmation.setSubmitAction(() => {
        api.deleteCard(card.idCard)
            .then(() => {
                card.deleteCard();
                popupWithConfirmation.close();
            }).catch((err) => console.log(`Ошибка: ${err}`))
    });
}

popupWithImage.setEventListeners();
popupAddCard.setEventListeners();
popupAvatarUpdate.setEventListeners();
popupProfile.setEventListeners();
popupWithConfirmation.setEventListeners();

editBtn.addEventListener('click', () => {
    popupProfile.open();
    popupProfile.setInputValues(userInfo.getUserInfo());
    validateEditProfilePopup.resetFormValidation();
});

addImgBtn.addEventListener('click', () => {
    popupAddCard.open();
    validateAddNewCard.resetFormValidation();
});

editAvatarBtn.addEventListener('click', () => {
    popupAvatarUpdate.open();
    validateAvatarUpdatePopup.resetFormValidation();
});

validateEditProfilePopup.enableValidation();
validateAddNewCard.enableValidation();
validateAvatarUpdatePopup.enableValidation();