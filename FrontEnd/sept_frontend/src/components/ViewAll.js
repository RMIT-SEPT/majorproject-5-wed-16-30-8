import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {BrowserRouter as Redirect} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"

import Header from './Layout/Header'

import CreateUserButton from './Persons/CreateUserButton';
import CreateBusinessButton from './Business/CreateBusinessButton';
import CreateEmployeeButton from './Persons/CreateEmployeeButton';

import PostUsersButton from './Post/PostUsersButton'
import PostEmployeesButton from './Post/PostEmployeesButton'
import PostBusinessesButton from './Post/PostBusinessesButton'
import PostBookingsButton from './Post/PostBookingsButton'


class ViewAll extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            personIdentifier: this.props.personIdentifier
        }

        this.storeLoginToken = this.storeLoginToken.bind(this)
        this.storeLoginToken()
    }

    storeLoginToken() {
        this.props.dispatch({
            type: "LOGIN",
            payload: {
                'personIdentifier': this.props.personIdentifier,
                'address': this.props.address, 
                'ph_Num': this.props.ph_Num,
                'token': this.props.token
            }
        })
    }

    render() {
        if(this.props.isEmployee) {
            return (
                <div className="Persons">
                    <Header 
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        isEmployee={this.props.isEmployee}
                        businessIdentifier={this.props.businessIdentifier}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-4 text-center">View - You're an employee</h1>
                                <br />
    
                                <PostUsersButton />
                                <br/>
                                <br/>
                                <PostEmployeesButton />
                                <br/>
                                <br/>
                                <PostBookingsButton />
                                <br />
                                <hr />
    
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Persons">
                    <Header 
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        isEmployee={this.props.isEmployee}
                        businessIdentifier={this.props.businessIdentifier}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-4 text-center">View</h1>
                                <br />
    
                                <PostBusinessesButton />
                                <br/>
                                <br/>
                                <PostBookingsButton />
                                <br />
                                <hr />
    
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}
const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAll)
