// import React from 'react'
import "./card.scss"

const Card = ({name}) => {
  return (
    <div className="card">
      <img src="./src/assets/person.jpg" alt="" className="card__image" />
      <span className="card__name">{name}</span>
    </div>
  )
}

export default Card