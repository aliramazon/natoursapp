import React, { Fragment } from 'react';
import About from './About';
import Features from './Features';
import Header from './Header';
import Tours from './Tours';


const NatoursApp = () => (
    <Fragment>
        <Header/>
        <main>
            <About/>
            <Features/>
            <Tours/>
        </main>
    </Fragment>
);

export default NatoursApp;
