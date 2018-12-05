import React from 'react';
import TourCard from './TourCard';
import Button from './Button';

const Tours = () => (
    <section className="section-tours" id="section-tours">
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
                    price="$297"
                />
            </div>
            <div className="col-1-of-3">
                <TourCard
                    heading="The forest hiker"
                    modifier={2}
                    list={["7 days tours", "Up to 40 people", "6 tour guides", "Sleep in provided tents", "Difficulty: medium"]}
                    price="$497"
                />
            </div>
            <div className="col-1-of-3">
                <TourCard
                    heading="The snow adventurer"
                    modifier={3}
                    list={["5 days tours", "Up to 15 people", "3 tour guides", "Sleep in provided tents", "Difficulty: hard"]}
                    price="$897"
                />  
            </div>
        </div>
        <div className="u-center-text u-margin-top-big">
            <Button
                className="btn btn--green"
                text="Discover all tours"
            />
        </div>
    </section>
);

export default Tours;