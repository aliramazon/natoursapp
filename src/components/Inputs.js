import React, { Fragment } from 'react';

export const Input = ({ type, id, placeholder }) => (
    <Fragment>
        <input 
            type={type} 
            className="form__input" 
            placeholder={placeholder}
            id={id}
            required
        />
        <label 
            htmlFor={id}
            className="form__label"
        >
            {placeholder}
        </label>
    </Fragment>
)

export const Radio = ({ type, id, name, label}) => (
    <Fragment>
        <input 
            type="radio" 
            className="form__radio-input"
            id={id}
            name={name}
        />
        <label 
            htmlFor={id} className="form__radio-label"
        >
            <span className="form__radio-button">
            </span>
            {label}
        </label>
    </Fragment>
);