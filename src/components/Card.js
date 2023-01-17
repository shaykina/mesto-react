import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img className="card__image" alt={props.name} src={props.link} onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__title">{props.name}</h2>
        <button className="button card__trash" type="button" aria-label="кнопка удаления"></button>
        <div className="card__like-area">
          <button className="button card__like" type="button" aria-label="кнопка лайк"></button>
          <p className="card__like-number">{props.likesNumber}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
