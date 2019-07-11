import React from 'react';
import './Card.css'

const Card = ({id, name, date, time, number}) => {
  return(
    <article className='Card'>
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests:{number}</p>
    </article>
  )
}

export default Card;