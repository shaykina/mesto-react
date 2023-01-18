import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userInfo, setUserInfo] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((user) => {
      setUserName(user.name);
      setUserInfo(user.about);
      setUserAvatar(user.avatar);
    })
      .catch((err) => {
        console.log(err);
      });

    api.getInitialCards().then((cards) => {
      setCards(cards);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar" onClick={props.onEditAvatar} type="button" aria-label="редактировать аватар" style={{ backgroundImage: `url(${userAvatar})` }} />
        <div className="profile__main">
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userInfo}</p>
          </div>
          <button className="button profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="кнопка редактирования" />
        </div>
        <button className="button profile__add-button" onClick={props.onAddPlace} type="button" aria-label="кнопка добавления" />
      </section>
      <section className="elements" aria-label="карточки">
        {cards.map((card) => {
          return (
              <Card
                key={card._id}
                name={card.name}
                link={card.link}
                likesNumber={card.likes.length}
                onCardClick={props.onCardClick}
                card={card}
              />
          )
        })}
      </section>
    </main>
  );
}

export default Main;
