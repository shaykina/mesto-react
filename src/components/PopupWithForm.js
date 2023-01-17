import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="button popup__close" onClick={props.onClose} type="button" aria-label="кнопка закрытия попапа"></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          <fieldset className="popup__fieldset">
            {props.children}
          </fieldset>
          <button className="popup__submit" type="submit">{props.buttonText || "Сохранить"}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
