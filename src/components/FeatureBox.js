import React from 'react';
import paragraph from '../txtgen/txtgen';
const FeatureBox = (props) => (
    <div className="col-1-of-4">
        <div className="feature-box"> 
            <i className={`feature-box__icon ${props.iconClassName}`}></i> 
            <h3 className="heading-tertiary u-margin-bottom-small">
                {props.heading}
            </h3>
            <p className="feature-box__text">
                {paragraph([5]).slice(0, 120)}!
            </p>
        </div>
    </div>
);

export default FeatureBox;