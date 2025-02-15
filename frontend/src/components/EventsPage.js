import React from 'react';
import './EventsPage.css';

const Events = () => {
    return (
        <div className="Main">
            <div 
                className="Events CurrEve" 
                onClick={() => window.location.href = 'CurrentEvents.html'}
            >
                <div className="Event">Current Events</div>
            </div>

            <div 
                className="Events UpcomEve" 
                onClick={() => window.location.href = 'UpcomingEvents.html'}
            >
                <div className="Event">Upcoming Events</div>
            </div>

            <div 
                className="Events PastEve" 
                onClick={() => window.location.href = 'PastEvents.html'}
            >
                <div className="Event">Past Events</div>
            </div>
        </div>
    );
};

export default Events;