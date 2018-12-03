import React from 'react';
import paragraph from '../txtgen/txtgen';
const Story = ({ heading, img, name }) => (
    <div className="story">
        <figure className="story__shape">
            <img src={img} alt={name} className="story__img"/>
            <figcaption className="story__caption">
                {name}
            </figcaption>
        </figure>
        <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
                {heading}
            </h3>
            <p>
                {paragraph([10]).slice(0, 305)}.
            </p>
        </div>
    </div>
);


export default Story;