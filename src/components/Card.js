export default class Card {
    constructor(data, templateSelector, userId, { handleCardClick, handleCardLike, handleCardDelete }) {
        this._name = data.name;
        this._link = data.link;
        this.idCard = data._id;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardLike = handleCardLike;
        this._handleCardDelete = handleCardDelete;
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
        this._likeCount = this._card.querySelector('.elements__like-count');
        this._likeCount.textContent = this._likes.length;

        this._deleteBtn = this._card.querySelector('.elements__delete-btn');
        if (this._ownerId !== this._userId) {
            this._deleteBtn.remove();
        }

        this._cardTitle.textContent = this._name;
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;

        this._setEventListeners();
        return this._card;
    }

    _setEventListeners() {
        this._likeBtn.addEventListener('click', () => {
            this._handleCardLike(this);
        });
        this._deleteBtn.addEventListener('click', () => {
            this._handleCardDelete(this);
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }

    addLike() {
        this._likeBtn.classList.add('elements__like-btn_active');
    }

    removeLike() {
        this._likeBtn.classList.remove('elements__like-btn_active');
    }

    countLikes(count) {
        this._likeCount.textContent = count.likes.length;
        this._likes = count.likes;
    }

    _likeCard() {
        this.isLiked()
    }

    isLiked() {
        return this._likes.some((like) => {
            return like._id === this._userId;
        })
    }

    deleteCard() {
        this._card.remove();
    }
}



