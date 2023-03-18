const popupPreviewImg = document.querySelector('.popup__preview-image');
const popupTitleImg = document.querySelector('.popup__title-image');
const popupImg = document.querySelector('.popup_type_image'); 

import { openPopup } from "./index.js";

export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.elements__element')
        .cloneNode(true);

        return cardElement;
    }

    createCard() {
        this._card = this._getTemplate();
        this._setEventListeners();

        this._card.querySelector('.elements__title').textContent = this._name;
        this._card.querySelector('.elements__image').alt = this._name;
        this._card.querySelector('.elements__image').src = this._link;
       
        return this._card;
    }

    _setEventListeners() {
        this._card.querySelector('.elements__like-btn').addEventListener('click', () => {
            this._handleLike();
        });
        this._card.querySelector('.elements__delete-btn').addEventListener('click', () => {
            this._card.remove();
        });
        this._card.querySelector('.elements__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
    }

    _handleLike() {
        this._card.querySelector('.elements__like-btn').classList.toggle('elements__like-btn_active');
        };

    _handleOpenPopup() {
            popupPreviewImg.src = this._link;
            popupPreviewImg.alt = this._name;
            popupTitleImg.textContent = this._name;
            openPopup(popupImg);
  }
}


  
