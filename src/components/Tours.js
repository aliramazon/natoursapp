import React from 'react';
import TourCard from './TourCard';

const Tours = () => (
    <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
            <h1 className="heading-secondary">
                Most popular tours
            </h1>
        </div>

        <div className="row">
            <div className="col-1-of-3">
                <TourCard
                    heading="The sea explorer"
                    modifier={1}
                    list={["3 days tours", "Up to 30 people", "2 tour guides", "Sleep in cozy hotels", "Difficulty: easy"]}
                />
            </div>
            <div className="col-1-of-3">
                <TourCard
                    heading="The forest hiker"
                    modifier={2}
                    list={["7 days tours", "Up to 40 people", "6 tour guides", "Sleep in provided tents", "Difficulty: medium"]}
                />
            </div>
            <div className="col-1-of-3">
                <TourCard
                    heading="The snow adventurer"
                    modifier={3}
                    list={["5 days tours", "Up to 15 people", "3 tour guides", "Sleep in provided tents", "Difficulty: hard"]}
                />  
            </div>
        </div>
    </section>
);

export default Tours;