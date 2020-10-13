import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPerson } from "../../actions/personActions";
import Header from '../Layout/Header'



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
                            <h5 className="display-4 text-center">Create / Edit Person form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="Full Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Username"
                                        // disabled 
                                        name="personIdentifier"
                                        value={this.state.personIdentifier}
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
AddUser.propTypes = {
    createPerson: PropTypes.func.isRequired
};

export default connect(
    null,
    { createPerson }
)(AddUser);
