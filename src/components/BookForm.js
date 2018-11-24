import React, { Component } from 'react';
import { Input, Radio } from './Inputs';

class BookForm extends Component {


    render() {
        return(
            <form action="#" className="form">
                <div className="form__group">
                    <Input
                        type="text"
                        id="name"
                        placeholder="Full name"
                    />
                </div>

                <div className="form__group">
                    <Input
                        type="email"
                        id="email"
                        placeholder="Email address"
                    />
                </div>

                <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                        <Radio
                            id="small"
                            name="size"
                            label="Small tour group"
                        />
                    </div>

                    <div className="form__radio-group">
                        <Radio
                            id="large"
                            name="size"
                            label="Large tour group"
                        />
                    </div>
                </div>
                <div className="form__group">
                    <button
                        className="btn btn--green"    
                    >
                        Next step &rarr;
                    </button>
                </div>
            </form>
        );
    }
}

export default BookForm;