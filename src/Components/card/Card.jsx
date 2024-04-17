// import React from 'react'
import "./card.scss"
import person from "../../assets/person.jpg"

// eslint-disable-next-line react/prop-types
const Card = ({name}) => {
  return (
    <div className="card">
      <img src={person} alt={name} className="card__image" />
      <span className="card__name">{name}</span>
    </div>
  )
}

export default Card