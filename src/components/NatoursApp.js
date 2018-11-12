import React, { Fragment } from 'react';
import Header from './Header';
import About from './About';

const NatoursApp = () => (
    <Fragment>
        <Header/>
        <main>
            <About/>
        </main>
    </Fragment>
);

export default NatoursApp;
