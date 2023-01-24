const popupBtnOpen = document.querySelector('.profile__edit-btn');
const popupContainer = document.querySelector('.popup');
const popupBtnClose = document.querySelector('.popup__closed-btn');
let formEditBio = document.querySelector('.popup__form');
let nameInput = document.querySelector(`input[name='user']`);
let professionInput = document.querySelector(`input[name='profession']`);
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

function openPopup() {
    popupContainer.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
}

function closePopup() {
    popupContainer.classList.remove('popup_opened');
}

function handleFormSubmit (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup();
}

popupBtnOpen.addEventListener('click', openPopup);
popupBtnClose.addEventListener('click', closePopup);

formEditBio.addEventListener('submit', handleFormSubmit); 

