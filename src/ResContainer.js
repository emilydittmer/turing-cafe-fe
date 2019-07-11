import React from 'react';
import Card from './Card';
import './ResContainer.css';

const ResContainer = ({reservations}) => {
  const resCard = reservations.map(res => {
    return (
      <Card 
      id = {res.id}
      name = {res.name}
      date = {res.date}
      time = {res.time}
      number = {res.number}
      key = {res.id}
      />
    )
  })
  return (
    <section className='res-container'>
      {resCard}
    </section>
  )
}

export default ResContainer;