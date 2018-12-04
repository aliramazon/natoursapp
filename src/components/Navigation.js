import React from 'react';
import NavLinks from './NavLinks';
import NavIcon from './NavIcon'
const Navigation = () => (
    <div className="navigation">
        <NavIcon/>
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