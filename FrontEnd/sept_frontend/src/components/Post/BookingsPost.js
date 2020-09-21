import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/BusinessDataTable'

const API = 'http://localhost:8080/api/booking/all';

class BookingsPost extends Component {

    constructor(props) {
        super(props)

        this.state = { bookingsCollection: [] };
    }

    componentDidMount() {
        axios.get(API)
            .then(res => {
                this.setState({ bookingsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.bookingsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />
        });
    }


    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Booking ID</td>
                                <td>booking Identifier</td>
                                <td>Business ID</td>
                                <td>Booking Date</td>
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
} export default BookingsPost;
