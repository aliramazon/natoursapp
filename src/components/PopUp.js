import React from 'react';
import paragraph from '../txtgen/txtgen'
import nat8 from '../images/nat-8.jpg';
import nat9 from '../images/nat-9.jpg';
import Button from './Button';

const PopUp = () => (
    <div className="popup">
        <div className="popup__content">
            <div className="popup__left">
                <img 
                    src={nat8} 
                    alt="Tour phote"
                    className="popup__img"
                />
                <img 
                    src={nat9} 
                    alt="Tour phote"
                    className="popup__img"
                />
            </div>
            <div className="popup__right">
                <h2 
                    className="heading-secondary u-margin-bottom-small"
                >
                    Start booking now
                </h2>
                <h3 
                    className="heading-tertiary u-margin-bottom-small"
                >
                    Overview &ndash; full description of tour
                </h3>
                <p 
                    className="popup__text u-margin-bottom-medium" 
                >
                    {paragraph(9)}
                </p>
                <Button
                    className="btn btn--green"
                    text="Book now"
                />
            </div>
        </div>
    </div>
);


export default PopUp;