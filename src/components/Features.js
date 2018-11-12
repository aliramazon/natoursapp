import React from 'react';
import FeatureBox from './FeatureBox'


const Features = () => (
    <section className="section-features">
        <div className="row">
            <FeatureBox
                iconClassName="icon-basic-world"
                heading="Explore the world"
            />
            <FeatureBox
                iconClassName="icon-basic-compass"
                heading="Meet the nature"
            />
            <FeatureBox
                iconClassName="icon-basic-map"
                heading="Find your way"
            />
            <FeatureBox
                iconClassName="icon-basic-heart"
                heading="Live a healthier life"
            />
        </div>
    </section>
);


export default Features;