import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/BusinessDataTable'
import Header from '../Layout/Header'

const API = 'http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/business/all';
// const API = "http://localhost:8080/api/business/all"


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
                <Header
                    personIdentifier={this.props.personIdentifier}
                    address={this.props.address}
                    ph_Num={this.props.ph_Num}
                    token={this.props.token}
                    isEmployee={this.props.isEmployee} />
                <h2 style={{ paddingLeft: "14%", color: "#185eb9" }}>Businesses</h2>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
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
