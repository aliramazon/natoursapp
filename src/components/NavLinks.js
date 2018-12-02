import React from 'react';

const NavLinks = ({ 
    linksNames, 
    listClass, 
    itemClass, 
    linkClass 
}) => {
        return (
        <ul className={listClass}>
            {linksNames.map((names, idx ) => (
                <li 
                    key={idx}
                    className={itemClass}
                >
                    <a href="#" className={linkClass}>
                        {names}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;