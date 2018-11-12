import React from 'react';
import logoWhite from "../images/logo-white.png";
import Button from './Button';

const Header = () => (
    <header className="header">
        <div className="header__logo-box">
            <img className="header__logo" src={logoWhite} alt="Logo" />
        </div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>
            </h1>
            <Button
                className="btn btn--white btn--animated"
                text="Discover our tours"
            />
        </div>
    </header>
);

export default Header;
