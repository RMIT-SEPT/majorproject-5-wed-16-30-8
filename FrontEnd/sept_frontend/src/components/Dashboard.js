import React, { Component } from 'react'
import { connect } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css"

import Header from './Layout/Header'
import Person from './Persons/Person'

import CreateUserButton from './Persons/CreateUserButton';
import CreateBusinessButton from './Business/CreateBusinessButton';
import CreateEmployeeButton from './Persons/CreateEmployeeButton';

import PostUsersButton from './Post/PostUsersButton'
import PostEmployeesButton from './Post/PostEmployeesButton'
import PostBusinessesButton from './Post/PostBusinessesButton'
import PostBookingsButton from './Post/PostBookingsButton'


class Dashboard extends Component {

    constructor(props) {
        super(props)
        
        this.state = {}

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
        return (
            <div className="Persons">
                <Header 
                    personIdentifier={this.props.personIdentifier}
                    address={this.props.address}
                    ph_Num={this.props.ph_Num}
                    token={this.props.token}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Persons</h1>
                            <br />
                            <h3>Signup</h3>
                            <CreateUserButton />

                            <CreateBusinessButton />

                            <CreateEmployeeButton />

                            <br></br>
                            <br></br>
                            <h3>View</h3>

                            <PostUsersButton />

                            <PostEmployeesButton />

                            <PostBusinessesButton />

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
const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return { dispatch }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)
