import React, { Fragment } from 'react';
import About from './About';
import Booking from './Booking';
import Features from './Features';
import Header from './Header';
import Stories from './Stories';
import Tours from './Tours';


const NatoursApp = () => (
    <Fragment>
        <Header/>
        <main>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Booking/>
        </main>
    </Fragment>
);

export default NatoursApp;
