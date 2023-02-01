import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
  const [avatarLink, setAvatarLink] = React.useState('');

  function handleAvatarLinkChange(e) {
    setAvatarLink(e.target.value);
  }

  React.useEffect(() => {
    setAvatarLink(avatarRef);
  }, [avatarRef]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="popup_photo"
      title="Обновить аватар">
      <label className="popup__field">
        <input className="popup__input popup__input_type_link" ref={avatarRef} onChange={handleAvatarLinkChange} type="url" name="photolink" id="photolink"
          placeholder="Ссылка на аватар" required />
        <span className="popup__error photolink-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
