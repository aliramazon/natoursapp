import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
    render(){
        return (
            <a 
                href={this.props.href ? this.props.href : '#'}
                className={this.props.className}
            >
                {this.props.text}
            </a>
        );
    }
}


export default Button;
