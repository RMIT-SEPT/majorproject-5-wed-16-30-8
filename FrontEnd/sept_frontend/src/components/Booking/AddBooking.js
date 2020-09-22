import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBooking } from "../../actions/bookingAction";

class AddBooking extends Component {
    constructor() {
        super();

        this.state = {
            bookingIdentifier: "",
            business_name: "",
            booking_date: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        //makes it so when it referesh the page will retain the value and infomation 
        e.preventDefault();
        const newBooking = {
            bookingIdentifier: this.state.bookingIdentifier,
            business_name: this.state.business_name,
            booking_date: this.state.booking_date
        }

        console.log(newBooking);
        this.props.createBooking(newBooking, this.props.history);
    }



    render() {
        return (
            <div className="booking">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Booking</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="Booking ID"
                                        name="bookingIdentifier"
                                        value={this.state.bookingIdentifier}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Business name"
                                        name="business_name"
                                        value={this.state.business_name}
                                        onChange={this.onChange} />
                                </div>

                                <h6>Booking Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg"
                                        name="booking_date"
                                        value={this.state.booking_date}
                                        onChange={this.onChange} />
                                </div>


                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
AddBooking.propTypes = {
    createBooking: PropTypes.func.isRequired
};

export default connect(
    null,
    { createBooking }
)(AddBooking);