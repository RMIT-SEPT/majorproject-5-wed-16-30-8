import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/UsersDataTable'

const API = 'http://localhost:8080/api/user/all';


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
            <h2 style={{paddingLeft: "14%", color: "#185eb9"}}>Users</h2>
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
