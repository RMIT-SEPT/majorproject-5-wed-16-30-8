import React, { Component } from 'react'
import axios from 'axios'

import DataTable from './DataTables/EmployeesDataTable'
import Header from '../Layout/Header'

const API = 'http://localhost:8080/api/employee/all';


class EmployeesPost extends Component {

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
                <Header 
                    personIdentifier={this.props.personIdentifier}
                    address={this.props.address}
                    ph_Num={this.props.ph_Num}
                    token={this.props.token}/>
            <h2 style={{paddingLeft: "14%", color: "#185eb9"}}>Employees</h2>
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Identifier</td>
                                <td>Name</td>
                                <td>Business ID</td>
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
} export default EmployeesPost;
