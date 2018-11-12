import React, { Fragment } from 'react';
import About from './About';
import Header from './Header';
import Features from './Features';

const NatoursApp = () => (
    <Fragment>
        <Header/>
        <main>
            <About/>
            <Features/>
        </main>
    </Fragment>
);

export default NatoursApp;
