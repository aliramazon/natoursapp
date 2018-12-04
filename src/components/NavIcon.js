import React, { Fragment } from 'react';

const NavIcon = () => (
    <Fragment>
        <input 
            type="checkbox" 
            id="navi-toggle" className="navigation__checkbox"
        />
        <label 
            htmlFor="navi-toggle"
            className="navigation__button"
        >
            <span className="navigation__icon">&nbsp;</span>
        </label>
    </Fragment>
);

export default NavIcon;
