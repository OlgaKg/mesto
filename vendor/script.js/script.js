const popupBtnOpen = document.querySelector(".profile__edit-btn");
const popupContainer = document.querySelector(".popup");
const popupBtnClose = document.querySelector(".popup__closed-btn");

popupBtnOpen.addEventListener("click", openPopup);
popupBtnClose.addEventListener("click", closePopup);

function openPopup() {
    popupContainer.classList.add("popup_opened");
}

function closePopup() {
    popupContainer.classList.remove("popup_opened");
}

popupContainer.addEventListener("click", function(event) {
    console.log(event.target);
    console.log(event.currentTarget);

if (event.target === event.currentTarget) {
    closePopup();
}
});  

let formEditBio = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input-name");
let professionInput = document.querySelector(".popup__input-profession");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

function handleFormSubmit (event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    popupContainer.classList.remove("popup_opened");
}

formEditBio.addEventListener('submit', handleFormSubmit); 

