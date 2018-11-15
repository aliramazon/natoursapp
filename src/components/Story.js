import React from 'react';

const Story = ({ heading, img, name }) => (
    <div className="story">
        <figure className="story__shape">
            <img src={img} alt={name} className="story__img"/>
        </figure>
        <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
                {heading}
            </h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore illum in nostrum. Deleniti omnis maxime maiores eum blanditiis incidunt, non temporibus repellendus commodi fuga option.Deleniti omnis maxime maiores eum blanditiis incidunt, non temporibus repellendus commodi fuga option.
            </p>
        </div>
    </div>
);


export default Story;