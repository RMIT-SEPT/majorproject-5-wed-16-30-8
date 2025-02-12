import React, { Component } from 'react'
import axios from 'axios'

import Header from '../Layout/Header'

const API = "http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/user/"
const APIEmployee = "http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/employee/"
// const API = "http://localhost:8080/api/user/"
// const APIEmployee = "http://localhost:8080/api/employee/"


class PersonProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personIdentifier: this.props.personIdentifier,
            name: '',
            password: '',
            address: '',
            ph_Num: '',
            isEmployee: this.props.isEmployee
        };
    }

    componentDidMount() {
        if (this.state.isEmployee) {
            axios.get(APIEmployee + this.state.personIdentifier)
                .then(res => {
                    this.setState({
                        name: res.data.name,
                        personIdentifier: res.data.personIdentifier,
                        password: res.data.password,
                        address: res.data.address,
                        ph_Num: res.data.ph_Num,
                        businessIdentifier: res.data.businessId
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
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
    }



    render() {
        if (this.state.isEmployee) {
            return (
                <div className="wrapper-users">
                    <Header
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        isEmployee={this.props.isEmployee}
                        businessIdentifier={this.props.businessIdentifier} />
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
                                        {this.state.personIdentifier}
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

                        <table className="table table-striped">
                            <thead className="thead-dark">

                                <tr>
                                    <td><b>Business</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {this.state.businessIdentifier}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else if (this.props.personIdentifier != null) {
            return (
                <div className="wrapper-users">
                    <Header
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        businessIdentifier={this.props.businessIdentifier}
                        isEmployee={this.props.isEmployee} />
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
                                        {this.state.personIdentifier}
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
                    </div>
                </div>
            )
        } else {
            return (
                <div className="profile_screen_editprofile" id="profile_screen_editprofile">
                    <Header
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        businessIdentifier={this.props.businessIdentifier}
                        isEmployee={this.props.isEmployee} />
                    <br />
                    <h2 style={{ paddingLeft: "14%", color: "#185eb9" }}>Please log in to edit your profile.</h2>
                    <br /><br />
                </div>
            )
        }
    }
}

export default PersonProfile;