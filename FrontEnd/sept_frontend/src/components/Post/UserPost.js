import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/UsersDataTable'
import Header from '../Layout/Header'

const API = 'http://ec2-3-86-48-162.compute-1.amazonaws.com:8080/api/user/all';
// const API = "http://localhost:8080/api/user/all"


class PersonsPost extends Component {

    constructor(props) {
        super(props)

        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get(API)
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
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
                <h2 style={{ paddingLeft: "14%", color: "#185eb9" }}>Users</h2>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Identifier</td>
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
} export default PersonsPost;
