import React, { Component } from 'react';

class BookForm extends Component {


    render() {
        return(
            <form action="#" className="form">
                <div className="form__group">
                    <input 
                        type="text" 
                        className="form__input" placeholder="Full Name"
                        id="name"
                        required
                    />
                    <label 
                        htmlFor="name"
                        className="form__label"
                    >
                        Full name
                    </label>
                </div>
                <div className="form__group">
                    <input 
                        type="email" 
                        className="form__input" placeholder="Email address"
                        id="email"
                        required
                    />
                    <label 
                        htmlFor="email"
                        className="form__label"
                    >
                        Email address
                    </label>
                </div>
            </form>
        );
    }
}

export default BookForm;