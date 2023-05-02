(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t,r,n){var o=n.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleCardClick=o}var r,n;return r=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"createCard",value:function(){return this._card=this._getTemplate(),this._cardTitle=this._card.querySelector(".elements__title"),this._cardImage=this._card.querySelector(".elements__image"),this._likeBtn=this._card.querySelector(".elements__like-btn"),this._deleteBtn=this._card.querySelector(".elements__delete-btn"),this._cardTitle.textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._setEventListeners(),this._card}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._handleLike()})),this._deleteBtn.addEventListener("click",(function(){e._card.remove()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLike",value:function(){this._likeBtn.classList.toggle("elements__like-btn_active")}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this.config.inputSelector)),this._buttonElement=this._formElement.querySelector(this.config.submitButtonSelector)}var t,r;return t=e,r=[{key:"_showInputError",value:function(e,t,r){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this.config.inputErrorClass),n.textContent=r,n.classList.add(this.config.errorClass)}},{key:"_hideInputError",value:function(e,t){var r=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this.config.inputErrorClass),r.classList.remove(this.config.errorClass),r.textContent=""}},{key:"_сheckInputValidity",value:function(e,t,r){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,t.validationMessage)}},{key:"_setEventListeners",value:function(e,t){var r=this;this._toggleButtonState(this._inputList,t),this._inputList.forEach((function(n){n.addEventListener("input",(function(){r._сheckInputValidity(e,n,t),r._toggleButtonState(r._inputList,r._buttonElement,t)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t,r){this._hasInvalidInput(e,r)?this._buttonElement.disabled=!0:this._buttonElement.removeAttribute("disabled","disabled")}},{key:"disableSaveBtn",value:function(){this._buttonElement.disabled=!0}},{key:"resetInputError",value:function(){var e=this;this._inputList.forEach((function(t){var r=e._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(e.config.inputErrorClass),r.classList.remove(e.config.errorClass),r.textContent=""}))}},{key:"enableValidation",value:function(){this._setEventListeners(this._formElement,this.config)}}],r&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var a=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target===e._popup&&e.close()}))}},{key:"_handleBtnClose",value:function(){var e=this;this._popup.querySelector(".popup__closed-btn").addEventListener("click",(function(){e.close()}))}},{key:"setEventListeners",value:function(){this._handleOverlayClose(),this._handleBtnClose()}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},m.apply(this,arguments)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPreviewImg=t._popup.querySelector(".popup__preview-image"),t._popupTitleImg=t._popup.querySelector(".popup__title-image"),t}return t=u,(r=[{key:"open",value:function(e,t){this._popupPreviewImg.src=t,this._popupPreviewImg.alt=e,this._popupTitleImg.textContent=e,m(d(u.prototype),"open",this).call(this)}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,r=e.popupSelector,n=e.formSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,r))._handleFormSubmit=o,t._formSelector=n,t._inputList=t._formSelector.querySelectorAll(".popup__input"),t}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;S(w(u.prototype),"setEventListeners",this).call(this),this._formSelector.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._formSelector.reset()}}])&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}var P=function(){function e(t){var r=t.userNameSelector,n=t.userProfessionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameSelector=r,this._userProfessionSelector=n,this._userAvatarSelector=o}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return this._userData={user:this._userNameSelector.textContent,profession:this._userProfessionSelector.textContent},this._userData}},{key:"setUserInfo",value:function(e){this._userNameSelector.textContent=e.name,this._userProfessionSelector.textContent=e.about,this._userAvatarSelector.src=e.avatar}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}var L=function(){function e(t){var r=t.baseUrl,n=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=n}var t,r;return t=e,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getUser",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"updateUserData",value:function(e){var t=this,r=e.user,n=e.profession;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:r,about:n})}).then((function(e){return t._checkResponse(e)}))}},{key:"addCard",value:function(e){var t=this,r=e.name,n=e.link;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:r,link:n}).then((function(e){return t._checkResponse(e)}))})}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_visible",cardTemplate:".elements__card-template",cardListSelector:".elements"},q=document.querySelector(".profile__edit-btn-open-popup"),T=document.querySelector(".profile__add-btn"),R=(document.querySelectorAll(".popup__closed-btn"),document.querySelector(".popup_type_edit-profile")),B=document.querySelector(".popup_type_add-new-card"),U=document.querySelector(".popup__form_profile"),A=document.querySelector(".popup__form_new-card"),x=(document.querySelector("input[name='user']"),document.querySelector("input[name='profession']"),document.querySelector(".profile__name")),V=document.querySelector(".profile__profession"),D=document.querySelector(".profile__avatar");function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.querySelector(".elements"),document.querySelector("input[name='image-name']"),document.querySelector("input[name='image-link']"),document.querySelector(".popup__preview-image"),document.querySelector(".popup__title-image"),document.querySelector(".popup_type_image");var F=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"64310842-09ec-48fd-bedb-7994dd64af4b","Content-Type":"application/json"}}),G=new i(I,R),J=new i(I,B),M=new a({data:F.getCards(),renderer:function(e){Q(e)}},I.cardListSelector);M.renderItems();var z=new h(".popup_type_image");z.setEventListeners();var H=new E({popupSelector:".popup_type_add-new-card",formSelector:A,handleFormSubmit:function(e){Q(e)}});H.setEventListeners();var $=new P({userNameSelector:x,userProfessionSelector:V,userAvatarSelector:D}),K=new E({popupSelector:".popup_type_edit-profile",formSelector:U,handleFormSubmit:function(e){F.updateUserData(e).then((function(e){$.setUserInfo(e),K.close()})).catch((function(e){console.log(e)}))}});function Q(e){var t=new r(e,I.cardTemplate,{handleCardClick:function(e,t){z.open(e,t)}}).createCard();return M.addItem(t),t}K.setEventListeners(),Promise.all([F.getUser(),F.getCards()]).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];o.setUserInfo(o),M.renderItems(i.reverse())})).catch((function(e){console.log("Error: ".concat(e))})),q.addEventListener("click",(function(){K.open(),K.setInputValues($.getUserInfo()),G.resetInputError()})),T.addEventListener("click",(function(){H.open(),J.disableSaveBtn(),J.resetInputError()})),G.enableValidation(),J.enableValidation()})();