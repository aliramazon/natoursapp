import React from 'react';
import Story from './Story';
import avatar1 from '../images/nat-8.jpg';
import avatar2 from '../images/nat-9.jpg';
const Stories = () => (
    <section className="section-stories">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                We make people genuinely happy
            </h2>
        </div>
        <div className="row">
            <Story
                heading="I had the best week ever with my family"
                img={avatar1}
                name="Mary Smith"
            />
        </div>
    </section>
);

export default Stories;