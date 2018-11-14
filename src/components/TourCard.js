import React from 'react';
import Button from './Button';

const TourCard = ({ heading, modifier, list, price }) => (
    <div className="card">
        {/* Front side */}

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
        {/* Back side */}
        
        <div className={`card__side card__side--back card__side--back--${modifier}`}>
            <div className="card__cta">
                <div className="card__price-box">
                    <p className="card__price-only">
                        Only
                    </p>
                    <p className="card__price-value">
                        {price}
                    </p>
                </div>
                <Button
                    className="btn btn--white"
                    text="Book now"
                />
            </div>
        </div>
    </div>
);

export default TourCard;