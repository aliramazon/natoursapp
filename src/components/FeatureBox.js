import React from 'react';

const FeatureBox = (props) => (
    <div className="col-1-of-4">
        <div className="feature-box"> 
            <i className={`feature-box__icon ${props.iconClassName}`}></i> 
            <h3 className="heading-tertiary u-margin-bottom-small">
                {props.heading}
            </h3>
            <p className="feature-box__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ratione sun the last breath cool.
            </p>
        </div>
    </div>
);

export default FeatureBox;