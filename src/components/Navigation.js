import React from 'react';
import NavLinks from './NavLinks';

const Navigation = () => (
    <div className="navigation">
        <input 
            type="checkbox" 
            id="navi-toggle" className="navigation__checkbox"
        />
        <label 
            htmlFor="navi-toggle"
            className="navigation__button"
        >
            Menu
        </label>
        <div className="navigation__background">
            &nbsp;
        </div>
        <nav className="navigation__nav">
            <NavLinks
                listClass="navigation__list"
                itemClass="navigation__item"
                linkClass="navigation__link"
                linksNames={[
                    "About Natours",
                    "Your Benefits",
                    "Popular Tours",
                    "Stories",
                    "Book Now"
                ]}
            />
        </nav>
    </div>
);

export default Navigation;