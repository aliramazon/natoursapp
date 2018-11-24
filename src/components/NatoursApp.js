import React, { Fragment } from 'react';
import About from './About';
import Booking from './Booking';
import Features from './Features';
import Footer from './Footer';
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
        <Footer/>
    </Fragment>
);

export default NatoursApp;
