
import React from 'react'
import './App.css';

const Events_Card = ({ events }) => {
  return (
    <div>
      {events.map((event) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
            <p className="card-text">{event.description}</p>
            <img className="card-img" src={event.image} alt="alternatetext"></img>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Events_Card

