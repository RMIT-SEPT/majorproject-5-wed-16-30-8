import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/BusinessDataTable'

const API = 'http://localhost:8080/api/business/all';
const axiosConst = require("axios");

class BusinessesPost extends Component {

    constructor(props) {
        super(props)

        this.state = { businessCollection: [] };
    }

    componentDidMount() {
        axios.get(API)
        .then(res => {
            this.setState({ businessCollection: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    dataTable() {
        return this.state.businessCollection.map((data, i) => {
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
                                <td>Name</td>
                                <td>Identifier</td>
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
} export default BusinessesPost;
