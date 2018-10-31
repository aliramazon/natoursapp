import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
    render(){
        return (
            <a href="#"
                className="btn btn-white btn-animated"
            >Discover our tours</a>
        );
    }
}


export default Button;
