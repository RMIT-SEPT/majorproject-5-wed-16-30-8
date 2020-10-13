import React, { Component } from 'react'

class LoggedInHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">

                    <a className="navbar-brand" href="dashboard">
                        SEPT
                </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="navbar-toggle-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="/dashboard">
                                    Dashboard
                            </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="/booking">
                                    Booking
                            </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="/profile">
                                    Profile
                            </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">
                                    Logout
                               </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
export default LoggedInHeader;