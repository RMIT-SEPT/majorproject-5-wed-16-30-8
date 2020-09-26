import React, { Component } from 'react'
import Person from './Persons/Person'

import "bootstrap/dist/css/bootstrap.min.css"
import CreateUserButton from './Persons/CreateUserButton';
import CreateBusinessButton from './Business/CreateBusinessButton';
import CreateEmployeeButton from './Persons/CreateEmployeeButton';

import PostUsersButton from './Post/PostUsersButton'
import PostEmployeesButton from './Post/PostEmployeesButton'
import PostBusinessesButton from './Post/PostBusinessesButton'
import PostBookingsButton from './Post/PostBookingsButton'


class Dashboard extends Component {
    render() {
        return (
            <div className="Persons">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Persons</h1>
                            <br />
                            <h3>Signup</h3>
                            <CreateUserButton />

                            <CreateBusinessButton />

                            <CreateEmployeeButton />

                            <br></br>
                            <br></br>
                            <h3>View</h3>

                            <PostUsersButton />

                            <PostEmployeesButton />

                            <PostBusinessesButton />

                            <PostBookingsButton />
                            <br />
                            <hr />

                            <Person />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;
