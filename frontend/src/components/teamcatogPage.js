import React from 'react';
import { useNavigate } from 'react-router-dom';
import './teamcatogPage.css';

const TeamCategories = () => {
    const navigate = useNavigate();

    return (
        <div className="Main">
            <div 
                className="Events CurrEve" 
                onClick={() => navigate('/members?team=core')}
            >
                <div className="Event">Core Team</div>
            </div>

            <div 
                className="Events UpcomEve" 
                onClick={() => navigate('/members?team=developers')}
            >
                <div className="Event">Developers Team</div>
            </div>

            <div 
                className="Events PastEve" 
                onClick={() => navigate('/members?team=internit')}
            >
                <div className="Event">Inter NIT Team</div>
            </div>
        </div>
    );
};

export default TeamCategories;