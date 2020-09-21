import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/PersonsDataTable'

const API = 'http://localhost:8080/api/user/all';
const axiosConst = require("axios");

class PersonsPost extends Component {

    constructor(props) {
        super(props)

        this.state = { personsCollection: [] };
    }

    componentDidMount() {
        axios.get(API)
        .then(res => {
            this.setState({ personsCollection: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    dataTable() {
        return this.state.personsCollection.map((data, i) => {
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
                                <td>ID</td>
                                <td>Identifier</td>
                                <td>Name</td>
                                <td>Description</td>
                                <td>Start Date</td>
                                <td>End Date</td>
                                <td>Created At</td>
                                <td>Updated At</td>
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
} export default PersonsPost;
