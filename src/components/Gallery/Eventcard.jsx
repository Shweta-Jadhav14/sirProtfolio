import React from 'react';

const EventCard = ({ image, title, location, onClick }) => {
  return (
    // Changed class: card -> gallery-event-card
    <div className="gallery-event-card" onClick={onClick}>
      <div className="gallery-card-img-box">
        <img src={image} alt={title} className="gallery-card-img" loading="lazy" />
      </div>
      <div className="gallery-card-content">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default EventCard;