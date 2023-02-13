const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const formProfile = document.querySelector('.popup__form_profile');
const formCard = document.querySelector('.popup__form_new-card'); 
let nameInput = document.querySelector(`input[name='user']`);
let professionInput = document.querySelector(`input[name='profession']`);
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

const template = document.querySelector('.elements__card-template').content.querySelector('.elements__element');
const elementsCards = document.querySelector('.elements');
const createBtn = document.querySelector('.popup__create-btn');
const imageNameInput = document.querySelector(`input[name='image-name']`);
const imageLinkInput = document.querySelector(`input[name='image-link']`);
const imageName = document.querySelector('.popup__input_type_image-name');
const imageLink = document.querySelector('.popup__input_type_image-link');

const imagePopup = document.querySelector('.popup_type_image');



const openPopup = (BtnOpen, popupContainer) => {
    const popupBtnOpen = document.querySelector(BtnOpen);
    const popup = document.querySelector(popupContainer);
    if (!popupBtnOpen || !popup) return; 
    popupBtnOpen.addEventListener('click', event => {
        event.preventDefault();
        popup.classList.add('popup_opened');
    });
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
};

const closePopup = () => {
    const popupContainer = document.querySelectorAll('.popup');
    if (!popupContainer) return;
    popupContainer.forEach(el => {
        el.addEventListener('click', event => {
            if (event.target.closest('.popup__closed-btn, .popup__save-btn')) {
                el.classList.remove('popup_opened');
            }
        });
    });
};

function handleFormSubmitProfile(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup();
}

createBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const card = createCard({ name: imageNameInput.value, link: imageLinkInput.value });
    elementsCards.prepend(card);
});

function renderCards() {
    const cards = initialCards.map((item) => {
        return createCard(item);
    });
    elementsCards.prepend(...cards);
}

function createCard(item) {
    const card = template.cloneNode(true);
    card.querySelector('.elements__title').textContent = item.name;
    card.querySelector('.elements__title').alt = item.name;
    card.querySelector('.elements__image').src = item.link;
    card.querySelector('.elements__like-btn').addEventListener('click', (event) => {
        event.target.classList.toggle('elements__like-btn_active');
    });
    card.querySelector('.elements__delete-btn').addEventListener('click', () => {
        card.remove();
    });

    card.querySelector('.elements__image').addEventListener('click', () => {
        openPopup('.elements__image', '.popup_type_image');
        const imagePreview = imagePopup.querySelector('.popup__preview-image');
        imagePreview.src = item.link;
        imagePreview.alt = item.name;
        imagePopup.querySelector('.popup__title-image').textContent = item.name;
    });
    return card;
}

function handleFormSubmitCard(evt) {
    evt.preventDefault();
    elementsCards.prepend(card);
    closePopup();
}

openPopup('.profile__edit-btn-open-popup', '.popup_type_edit-profile');
openPopup('.profile__add-btn-open-popup', '.popup_type_add-new-card');
closePopup();
renderCards();

formProfile.addEventListener('submit', handleFormSubmitProfile);
formCard.addEventListener('submit', handleFormSubmitCard);




