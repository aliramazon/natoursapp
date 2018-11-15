import React, { Fragment } from 'react';
import About from './About';
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
        </main>
    </Fragment>
);

export default NatoursApp;
