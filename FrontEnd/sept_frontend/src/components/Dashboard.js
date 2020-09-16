import React, { Component } from 'react'
import Person from './Persons/Person'

import "bootstrap/dist/css/bootstrap.min.css"
import CreatePersonButton from './Persons/CreatePersonButton';
import CreateBusinessButton from './Business/CreateBusinessButton';
import CreateEmployeeButton from './Persons/CreateEmployeeButton';


class Dashboard extends Component {
    render() {
        return (
            <div className="Persons">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Persons</h1>
                        <br />
                            <CreatePersonButton/>
                            
                            <CreateBusinessButton/>

                            <CreateEmployeeButton/>
                        <br />
                        <hr />

                        <Person/>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Dashboard;
