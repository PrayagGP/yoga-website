import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventsPage.css';

const Events = () => {
    const navigate = useNavigate();

    return (
        <div className="Main">
            <div 
                className="Events CurrEve" 
                onClick={() => navigate('/eventslist?type=current')}
            >
                <div className="Event">Current Events</div>
            </div>

            <div 
                className="Events UpcomEve" 
                onClick={() => navigate('/eventslist?type=upcoming')}
            >
                <div className="Event">Upcoming Events</div>
            </div>

            <div 
                className="Events PastEve" 
                onClick={() => navigate('/eventslist?type=past')}
            >
                <div className="Event">Past Events</div>
            </div>
        </div>
    );
};

export default Events;