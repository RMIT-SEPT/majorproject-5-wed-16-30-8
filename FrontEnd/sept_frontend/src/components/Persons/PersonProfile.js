import React, { Component } from 'react'
import axios from 'axios'

import UpdatePersonButton from './UpdatePersonButton';
import Header from '../Layout/Header'

const API = "http://localhost:8080/api/user/"

class PersonProfile extends Component {

    // let personIdentifier = "AA11"


    constructor(props) {
        super(props);

        this.state = {
            personIdentifier: props.personIdentifier

        };
    }

    componentDidMount() {
        axios.get(API + this.state.personIdentifier)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    personIdentifier: res.data.personIdentifier,
                    password: res.data.password,
                    address: res.data.address,
                    ph_Num: res.data.ph_Num
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    render() {
        return (
            <div className="wrapper-users">
            <Header 
                personIdentifier={this.props.personIdentifier}
                address={this.props.address}
                ph_Num={this.props.ph_Num}
                token={this.props.token}/>
                <h2 style={{ paddingLeft: "14%", color: "#185eb9" }}>Welcome {this.state.name} - {this.state.personIdentifier}</h2>
                <div className="container">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <td><b>Username</b></td>
                            </tr>

                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    {this.props.personIdentifier}
                                </td>
                            </tr>


                        </tbody>
                    </table>
                    <table className="table table-striped">
                        <thead className="thead-dark">

                            <tr>
                                <td><b>Name</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.name}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <table className="table table-striped">
                        <thead className="thead-dark">

                            <tr>
                                <td><b>Phone No.</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.ph_Num}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <table className="table table-striped">
                        <thead className="thead-dark">

                            <tr>
                                <td><b>Address</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.address}
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <UpdatePersonButton/>
                </div>
            </div>
        )
    }
}

export default PersonProfile;