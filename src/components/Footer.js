import React from 'react';
import NavLinks from './NavLinks';
import footerLogo2x from '../images/logo-green-2x.png';
import footerLogo1x from '../images/logo-green-1x.png';
import footerLogoSmall1x from '../images/logo-green-small-1x.png';
import footerLogoSmall2x from '../images/logo-green-small-2x.png'

const Footer = () => (
    <footer className="footer">
        <div className="footer__logo-box">
            <picture className="footer__logo">
                <source
                    srcSet={`${footerLogoSmall1x} 1x, ${footerLogoSmall2x} 2x`}
                    media="(max-width: 37.5em)"
                />
                <img 
                    srcSet={`${footerLogo1x} 1x, ${footerLogo2x} 2x`}
                    alt="Logo"
                />
            </picture>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <NavLinks
                        listClass="footer__list"
                        itemClass="footer__item"
                        linkClass="footer__link"
                        linksNames={["Company", 
                        "Contact", 
                        "Careers", 
                        "Privacy Policy", 
                        "Terms"]}
                    />
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Built by <a href="https://www.wedesign.app" className="footer__link">Ali Ramazon</a> using ReactJS. Design by Jonas Schmedmann.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;