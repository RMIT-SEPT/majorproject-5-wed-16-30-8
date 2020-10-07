import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBooking } from "../../actions/bookingAction";

import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';

const API = "http://localhost:8080/api/business/all"

class AddBooking extends Component {
    constructor() {
        super();

        this.state = {
            // bookingIdentifier: "",
            business_name: "",
            booking_date: "",
            businessId: "",
            selectedOption: "",
            service: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    // setBookingId() {
    //     let businessCollection = this.fetchData();
    //     let id = this.idCounter;
    // }

    fetchData = (inputValue, callback) => {
        if(!inputValue) {
            callback([]);
        } else {
            setTimeout(() => {
                fetch(API, {
                    method: "GET",
                })
                .then((resp) => {
                    return resp.json()
                })
                .then((data) => {
                    const tempArray = [];
                    data.forEach((element) => {
                        tempArray.push({ label: element.business_name, value: element.businessId });
                    });
                    callback(tempArray);
                })
                .catch((error) => {
                    console.log(error, "Catch the hoop")
                });
            });
        }
    }

    onSearchChange = (selectedOption) => {
        if(selectedOption) {
            this.setState({
                selectedOption,
                business_name: selectedOption.label,
                businessId: selectedOption.value
            });
        }
    };

    onSubmit(e) {
        //makes it so when it referesh the page will retain the value and infomation 
        e.preventDefault();

        if(this.state.business_name === "") {
            alert("Please enter a business name")
            return
        }
        // if(this.state.bookingIdentifier === "") {
        //     alert("Please enter a booking number")
        //     return
        // }
        // if(this.state.booking_date === "") {
        //     alert("Please enter a date for your booking")
        //     return
        // }

        // this.bookingIdentifier = "bo";
        // this.idCounter++;

        const newBooking = {
            // booking_identifier: this.state.bookingIdentifier,
            businessId: this.state.businessId,
            booking_Date: this.state.booking_date,
            business_name: this.state.business_name

        }

        console.log(newBooking);
        this.props.createBooking(newBooking, this.props.history);
    }


    //drop down box to select Business and Employee and service

    render() {
        const animatedComponents = makeAnimated();
        return (
            <div className="booking">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Booking</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                {/*<div className="form-group">
                                <h5>Booking id</h5>
                                    <input type="text" className="form-control form-control-lg " placeholder="Booking ID"
                                        name="bookingIdentifier"
                                        value={this.state.bookingIdentifier}
                                        onChange={this.onChange} />
                                </div> */}

                                <h5>Business</h5>

                                <div className="drop-down">
                                    <AsyncSelect 
                                        placeholder="Start typing to view businesses" 
                                        value={this.state.selectedOption}
                                        loadOptions={this.fetchData}
                                        onChange={(e) => {
                                            this.onSearchChange(e); 
                                        }}
                                        defaultOptions={false}
                                        components={animatedComponents}
                                    />
                                </div>

                                {
                                    // Business_name option box
                                }
                                {/*<div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Business name"
                                        name="business_name"
                                        value={this.state.business_name}
                                        onChange={this.onChange} />
                                </div> */}
                                

                                <h5>Booking Date</h5>
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