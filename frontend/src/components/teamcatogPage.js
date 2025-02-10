import React from 'react';
import './teamcatogPage.css';

const TeamcatogPage = () => {
    return (
        <div className="Main">
            <div 
                className="Events CurrEve" 
                onClick={() => window.location.href = 'CurrentEvents.html'}
            >
                <div className="Event"></div>
            </div>

            <div 
                className="Events UpcomEve" 
                onClick={() => window.location.href = 'UpcomingEvents.html'}
            >
                <div className="Event"></div>
            </div>

            <div 
                className="Events PastEve" 
                onClick={() => window.location.href = 'PastEvents.html'}
            >
                <div className="Event"></div>
            </div>
        </div>
    );
};

export default TeamcatogPage;