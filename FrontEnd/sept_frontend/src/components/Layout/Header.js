import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom'

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        if(this.props.personIdentifier != null) {
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
                                    <a className="nav-link" href="/login">
                                        Logout
                                   </a>
                                </li>
                            </ul>
                        </div>
    
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4" id="header">
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
                                <a className="nav-link" href="/dashboard">
                                    Dashboard
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">
                                    Register
                                </a>  
                            </li>  
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Sign in
                                </a>
                            </li>
                        </ul>
                    </div>        
                </div>
            </nav>
            )
        }
        
    }
}
export default Header;