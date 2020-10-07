import React, { Component } from 'react'
import axios from 'axios'

import UpdatePersonButton from './UpdatePersonButton';

const API = "http://localhost:8080/api/user/"

class PersonProfile extends Component {

    // let personIdentifier = "AA11"


    constructor() {
        super();

        this.state = {
            name: "",
            personIdentifier: "12aa",
            password: "",
            address: "",
            ph_Num: ""
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
                <h2 style={{ paddingLeft: "14%", color: "#185eb9" }}>Users</h2>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Username</td>
                            </tr>

                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    {this.state.personIdentifier}
                                </td>
                            </tr>


                        </tbody>
                    </table>
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">

                            <tr>
                                <td>Name</td>
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
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">

                            <tr>
                                <td>Phone Number</td>
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
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">

                            <tr>
                                <td>Address</td>
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