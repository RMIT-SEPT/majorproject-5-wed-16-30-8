import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/BookingsDataTable'
import Header from '../Layout/Header'

const API = 'http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/booking/';

class BookingsPost extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            businessIdentifier: this.props.businessIdentifier,
            personIdentifier: this.props.personIdentifier,
            isEmployee: this.props.isEmployee,
            bookingsCollection: [] 
        };
    }

    componentDidMount() {
        console.log("ISEMPLOYEE: " + this.state.isEmployee + " bus ID: " + this.state.businessIdentifier + " p id: " + this.state.personIdentifier)
        if(this.state.isEmployee) {
            axios.get(API + 'business/' + this.state.businessIdentifier)
            .then(res => {
                this.setState({ bookingsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
        } else {
            axios.get(API + 'user/' + this.state.personIdentifier)
            .then(res => {
                this.setState({ bookingsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        // axios.get(API + this.state.busines)
        //     .then(res => {
        //         this.setState({ bookingsCollection: res.data });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
    }

    dataTable() {
        return this.state.bookingsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />
        });
    }


    render() {
        if(this.props.businessIdentifier != null) {
            return (
                <div className="wrapper-users">
                    <Header 
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        isEmployee={this.props.isEmployee}/>
                    <h2 style={{paddingLeft: "14%", color: "#185eb9"}}>Bookings</h2>
                    <div className="container">
                        <table className="table table-striped table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <td>Booking ID</td>
                                    <td>Business Name</td>
                                    <td>Booking Date (yyyy-mm-dd)</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.dataTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="wrapper-users">
                    <Header 
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        isEmployee={this.props.isEmployee}/>
                    <h2 style={{paddingLeft: "14%", color: "#185eb9"}}>Bookings</h2>
                    <div className="container">
                        <table className="table table-striped table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <td>Booking ID</td>
                                    <td>Business Name</td>
                                    <td>Booking Date (yyyy-mm-dd)</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.dataTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
} export default BookingsPost;
