import { initialCards } from './initialCards.js';

const editBtn = document.querySelector('.profile__edit-btn-open-popup');
const addImgBtn = document.querySelector('.profile__add-btn');
const closeBtns = document.querySelectorAll('.popup__closed-btn');
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
    createBtn.disabled = true;
});

formCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const card = createCard({ name: imageNameInput.value, link: imageLinkInput.value });
    elementsCards.prepend(card);
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

renderCards();

