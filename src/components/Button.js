import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
    render(){
        return (
            <a 
                href="#"
                className={this.props.className}
            >
                {this.props.text}
            </a>
        );
    }
}


export default Button;
