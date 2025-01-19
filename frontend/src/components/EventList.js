// React Component
import React from 'react';
import './EventList.css';
import eventImage1 from '../assets/profile.png';
import eventImage2 from '../assets/profile.png';
import eventImage3 from '../assets/profile.png';
import eventImage4 from '../assets/profile.png';
import eventsData from './EventsData';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt="Event" className="event-image" />
      <div className="event-details">
        <h3 className="event-title">{event.name}</h3>
        <p className="event-description">{event.description}</p>
        <p className='event-infobox'>
            <p className="event-info">Date: {event.date}</p>
            <p className="event-info">Timings: {event.time}</p>
            <p className="event-info">Venue: {event.venue}</p>
        </p>
        <p className='poc'>
        <p className="event-info">POCs:</p>
        <ul>
          {event.pocs.map((poc, index) => (
            <li key={index}>{poc.name}: {poc.contact}</li>
          ))}
        </ul>
        </p>
        <button className="event-button">More about event</button>
      </div>
    </div>
  );
};

const EventsList = () => {
  return (
    <div className="events-list">
      <h1 className="page-title">Current Events</h1>
      {eventsData.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventsList;