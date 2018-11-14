import React from 'react';

const TourCard = ({ heading, modifier, list }) => (
    <div className="card">
        <div className="card__side card__side--front">
            <div className={`card__picture card__picture--${modifier}`}>
                &nbsp;
            </div>
            <h4 className="card__heading">
                <span className={`card__heading-span card__heading-span--${modifier}`}>
                    { heading }
                </span>
                
            </h4>
            <div className="card__details">
                <ul>
                    {list.map((li, idx) => (
                       <li key={idx}>{li}</li> 
                    ))}
                </ul>
            </div>
        </div>
        <div className={`card__side card__side--back card__side--back--${modifier}`}>
            Back
        </div>
    </div>
);

export default TourCard;