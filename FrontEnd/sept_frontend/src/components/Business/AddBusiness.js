import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBusiness } from "../../actions/businessActions";
import Header from '../Layout/Header'

class AddBusiness extends Component {
    constructor() {
        super();

        this.state = {
            business_name: "",
            businessIdentifier: "",

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
        const newBusiness = {
            business_name: this.state.business_name,
            businessIdentifier: this.state.businessIdentifier,

        }
        console.log(newBusiness)


        this.props.createBusiness(newBusiness, this.props.history);
    }

    render() {
        return (
            <div className="business">
                <Header 
                    personIdentifier={this.props.personIdentifier}
                    address={this.props.address}
                    ph_Num={this.props.ph_Num}
                    token={this.props.token}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Business form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="Business Name"
                                        name="business_name"
                                        value={this.state.business_name}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Unique Business ID"
                                        // disabled 
                                        name="businessIdentifier"
                                        value={this.state.businessIdentifier}
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
AddBusiness.propTypes = {
    createBusiness: PropTypes.func.isRequired
};

export default connect(
    null,
    { createBusiness }
)(AddBusiness);