import React, { Fragment } from 'react';
import logoWhite from "../images/logo-white.png";
import Button from './Button';

const Header = () => (
    <Fragment>
        <header className="header">
            <div className="logo-box">
                <img className="logo" src={logoWhite} alt="Logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </h1>
                <Button/>
            </div>
        </header>
    </Fragment>
);

export default Header;
