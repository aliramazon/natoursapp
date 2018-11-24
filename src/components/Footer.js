import React from 'react';
import NavLinks from './NavLinks';
import footerLogo from '../images/logo-green-2x.png';

const Footer = () => (
    <footer className="footer">
        <div className="footer__logo-box">
            <img 
                src={footerLogo} 
                alt="Logo"
                className="footer__logo"
            />
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