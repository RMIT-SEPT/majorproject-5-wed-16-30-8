import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEmployee } from "../../actions/employeeAction";

class AddEmployee extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            personIdentifier: "",
            businessIdentifier: "",
            password: "",
            address: "",
            ph_Num: ""
            

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
        const newEmployee = {
            name: this.state.name,
            personIdentifier: this.state.personIdentifier,
            businessIdentifier: this.state.businessIdentifier,
            password: this.state.password,
            address: this.state.address,
            ph_Num: this.state.ph_Num
        }
        
        this.props.createEmployee(newEmployee, this.props.history);
    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Employee form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="Employee Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Unique Employee ID"
                                        // disabled 
                                        name="personIdentifier"
                                        value={this.state.personIdentifier}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Unique Business ID"
                                        // disabled 
                                        name="businessIdentifier"
                                        value={this.state.businessIdentifier}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg " placeholder="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="address"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="phone number"
                                        name="ph_Num"
                                        value={this.state.ph_Num}
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
AddEmployee.propTypes = {
    createEmployee: PropTypes.func.isRequired
};

export default connect(
    null,
    { createEmployee }
)(AddEmployee);