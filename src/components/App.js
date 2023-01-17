import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setisImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setisImagePopupOpen(true);
    setSelectedCard({
      name: card.name,
      link: card.link
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisImagePopupOpen(false);
  }

  return (

    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="popup_photo"
          title="Обновить аватар">
          <label className="popup__field">
            <input className="popup__input popup__input_type_link" type="url" name="photolink" id="photolink"
              placeholder="Ссылка на аватар" required />
            <span className="popup__error photolink-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="popup_edit"
          title="Редактировать профиль">
          <>
            <label className="popup__field">
              <input className="popup__input popup__input_type_name" type="text" name="name" id="name" placeholder="Имя"
                minLength="2" maxLength="40" required />
              <span className="popup__error name-error"></span>
            </label>
            <label className="popup__field">
              <input className="popup__input popup__input_type_job" type="text" name="job" id="job" placeholder="О себе"
                minLength="2" maxLength="200" required />
              <span className="popup__error job-error"></span>
            </label>
          </>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="popup_add"
          title="Новое место"
          buttonText="Создать">
          <label className="popup__field">
            <input className="popup__input popup__input_type_place-name" type="text" name="name" id="place-name"
              placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__error place-name-error"></span>
          </label>
          <label className="popup__field">
            <input className="popup__input popup__input_type_link" type="url" name="link" id="link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__error link-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="popup_delete"
          title="Вы уверены?"
          buttonText="Да" />

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />

      </div>
    </div>
  );
}

export default App;
