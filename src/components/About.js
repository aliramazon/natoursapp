import React from 'react';
import Button from './Button';
import paragraph from '../txtgen/txtgen';
import nat1Large from '../images/nat-1-large.jpg';
import nat2Large from '../images/nat-2-large.jpg';
import nat3Large from '../images/nat-3-large.jpg';

import nat1Small from '../images/nat-1.jpg';
import nat2Small from '../images/nat-2.jpg';
import nat3Small from '../images/nat-3.jpg';
import mapAgeCleaner from 'map-age-cleaner';

const About = () => {
    return (
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
                       {paragraph([3])}
                   </p>
   
                   <h3 className="heading-tertiary u-margin-bottom-small">
                       Live adventurous like you never have before
                   </h3>
                   <p className="paragraph">
                       {paragraph([1])}
                   </p> 
   
                  <Button
                       className="btn-text"
                       text="Learn more &rarr;"
                  />

                   
               </div>
               <div className="col-1-of-2">
                   <div className="composition">

                        <img 
                            srcSet={`${nat1Small} 300w, ${nat1Large} 1000w`}
                            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                            alt='Phote-1'
                            className="composition__photo composition__photo--p1"
                            src={nat1Large}
                        />

                        <img 
                            srcSet={`${nat2Small} 300w, ${nat2Large} 1000w`}
                            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                            alt='Phote-1'
                            className="composition__photo composition__photo--p2"
                            src={nat2Large}
                        />


                        <img 
                            srcSet={`${nat3Small} 300w, ${nat3Large} 1000w`}
                            sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                            alt='Phote-1'
                            className="composition__photo composition__photo--p3"
                            src={nat3Large}
                        />
                   </div> 
               </div>
           </div>
        </section>
   );
}

export default About;
