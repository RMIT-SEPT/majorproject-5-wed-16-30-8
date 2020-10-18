import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createEmployee } from "../../actions/employeeAction";
import Header from '../Layout/Header'

import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';

const API = 'http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/business/all'
// const API = "http://localhost:8080/api/business/all"

class AddEmployee extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            personIdentifier: null,
            businessId: "",
            password: "",
            address: "",
            ph_Num: "",
            businessIdentifier: ""
            

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.onSearchChange = this.onSearchChange.bind(this);
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
            businessId: this.state.businessId,
            password: this.state.password,
            address: this.state.address,
            ph_Num: this.state.ph_Num
        }
        
        this.props.createEmployee(newEmployee, this.props.history);
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
                businessId: selectedOption.value,
                businessIdentifier: selectedOption.value
            });
        }
    };

    render() {
        const animatedComponents = makeAnimated();
        return (
            <div className="project">
                <Header 
                    personIdentifier={this.props.personIdentifier}
                    address={this.props.address}
                    ph_Num={this.props.ph_Num}
                    token={this.props.token}
                    isEmployee={this.props.isEmployee}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Employee form</h5>
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
                                        name="personIdentifier"
                                        value={this.state.personIdentifier}
                                        onChange={this.onChange} />
                                </div>

                                <h5>Choose your Business</h5>

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

                                <div className="form-group">
                                    <input type="" className="form-control form-control-lg" placeholder="Unique Business ID"
                                        name="businessIdentifier"
                                        value={this.state.businessIdentifier}
                                        />
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