export default class Card {
    constructor(data, templateSelector, {handleCardClick }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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

        this._cardTitle = this._card.querySelector('.elements__title');
        this._cardImage = this._card.querySelector('.elements__image');

        this._likeBtn = this._card.querySelector('.elements__like-btn');
        this._deleteBtn = this._card.querySelector('.elements__delete-btn');

        this._cardTitle.textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;

        this._setEventListeners();
        return this._card;
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._handleLike();
        });
        this._deleteBtn.addEventListener('click', () => {
            this._card.remove();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }

    _handleLike() {
        this._likeBtn.classList.toggle('elements__like-btn_active');
    };
}



