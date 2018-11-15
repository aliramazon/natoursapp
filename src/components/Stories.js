import React from 'react';
import Story from './Story';
import Button from './Button';
import avatar1 from '../images/nat-8.jpg';
import avatar2 from '../images/nat-9.jpg';
import videoMp4 from '../images/video.mp4';
import videoWebm from '../images/video.webm';

const Stories = () => (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoWebm} type="video/webm"/>
            </video>
        </div>
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
        <div className="row">
            <Story
                heading="Wow! My life is completely different now"
                img={avatar2}
                name="Jack Wilson"
            />
        </div>
        <div className="u-center-text u-margin-top-big">
            <Button
                className="btn-text"
                text="Read all stories &rarr;"
            />
        </div>
    </section>
);

export default Stories;