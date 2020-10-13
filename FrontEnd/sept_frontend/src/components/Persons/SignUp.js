import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPerson } from "../../actions/personActions";
import Header from '../Layout/Header'
import CreateUserButton from './CreateUserButton';
import CreateBusinessButton from '../Business/CreateBusinessButton';
import CreateEmployeeButton from './CreateEmployeeButton';


class AddUser extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            personIdentifier: "",
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
        const newPerson = {
            name: this.state.name,
            personIdentifier: this.state.personIdentifier,
            password: this.state.password,
            address: this.state.address,
            ph_Num: this.state.ph_Num
        }

        this.props.createPerson(newPerson, this.props.history);
    }

    render() {
        return (
            <div className="persons">
                <Header 
                personIdentifier={this.props.personIdentifier}
                address={this.props.address}
                ph_Num={this.props.ph_Num}
                token={this.props.token}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Sign up as:</h5>
                            <hr />
                            <ul>
                                <CreateUserButton />
                            </ul>
                            <ul>
                                <CreateBusinessButton />
                            </ul>
                            <ul>
                                <CreateEmployeeButton />
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
AddUser.propTypes = {
    createPerson: PropTypes.func.isRequired
};

export default connect(
    null,
    { createPerson }
)(AddUser);
