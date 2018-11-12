import React from 'react';
import Button from './Button';
import nat1 from '../images/nat-1-large.jpg';
import nat2 from '../images/nat-2-large.jpg';
import nat3 from '../images/nat-3-large.jpg';

const About = () => (
     <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Exciting tours for adventurous people
            </h2>
        </div> 
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                    You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>

                <h3 className="heading-tertiary u-margin-bottom-small">
                    Live adventurous like you never have before
                </h3>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p> 

               <Button
                    className="btn-text"
                    text="Learn more &rarr;"
               />
                
            </div>
            <div className="col-1-of-2">
                <div className="composition">
                    <img src={nat1} alt="Photo-1" className="composition__photo composition__photo--p1"/>
                    <img src={nat2} alt="Photo-2" className="composition__photo composition__photo--p2"/>
                    <img src={nat3} alt="Photo-3" className="composition__photo composition__photo--p3"/>
                </div> 
            </div>
        </div>
        
     </section>
);

export default About;
