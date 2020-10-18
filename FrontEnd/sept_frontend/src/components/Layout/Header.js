import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            personIdentifier: this.props.personIdentifier
        }
    }


    render() {
        if(this.props.personIdentifier != null && !this.props.isEmployee) {
            return (
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                    <div className="container">
    
                        <h3 className="navbar-brand">
                            SEPT
                        </h3>

                        
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/viewAll" className="nav-link">View</Link>
                            </li>
                        </ul>
    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <span className="navbar-toggle-icon" />
                        </button>
    
                        <div className="collapse navbar-collapse" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
    
                                <li className="nav-item">
                                    <Link to="/booking" className="nav-link">Booking</Link>
                                </li>
    
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">Profile</Link>
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
        } else if(this.props.personIdentifier != null && this.props.isEmployee) {
            return(
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">

                    <h3 className="navbar-brand">
                        SEPT
                    </h3>

                    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/viewAll" className="nav-link">View</Link>
                        </li>
                    </ul>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="navbar-toggle-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
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
                    <h3 className="navbar-brand">
                        SEPT
                    </h3>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <span className="navbar-toggle-icon" />
                    </button>
                    
                    <div className="collapse navbar-collapse" id="mobile-nav">

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