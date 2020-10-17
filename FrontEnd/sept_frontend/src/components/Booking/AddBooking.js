import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBooking } from "../../actions/bookingAction";
import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';

import Header from '../Layout/Header'

const API = "http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/business/all"

class AddBooking extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            business_name: "",
            booking_date: "",
            businessIdentifier: "",
            selectedOption: "",
            service: "",
            personIdentifier: this.props.personIdentifier
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

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
                        tempArray.push({ label: element.business_name, value: element.businessIdentifier });
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
                businessIdentifier: selectedOption.value
            });
        }
    };

    onSubmit(e) {
        e.preventDefault();

        if(this.state.business_name === "") {
            alert("Please enter a business name")
            return
        }

        const newBooking = {
            // booking_identifier: this.state.bookingIdentifier,
            businessIdentifier: this.state.businessIdentifier,
            // businessIdentifier: this.state.businessId,
            booking_Date: this.state.booking_date,
            business_name: this.state.business_name,
            personIdentifier: this.state.personIdentifier
        }

        console.log(newBooking);
        this.props.createBooking(newBooking, this.props.history);
    }

    render() {
        const animatedComponents = makeAnimated();
        return (
            <div className="booking">
                <Header 
                    personIdentifier={this.props.personIdentifier}
                    address={this.props.address}
                    ph_Num={this.props.ph_Num}
                    token={this.props.token}
                    isEmployee={this.props.isEmployee}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Booking</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>

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