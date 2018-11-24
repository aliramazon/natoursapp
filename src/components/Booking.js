import React, { Component } from 'react';
import BookForm from './BookForm';

const Booking = () => (
    <section className="section-booking">
        <div className="row">
            <div className="book">
                <div className="book__form">
                    <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                            Start booking now
                        </h2>
                    </div>
                    <BookForm/>
                </div>
            </div>
        </div>
    </section>
);

export default Booking;