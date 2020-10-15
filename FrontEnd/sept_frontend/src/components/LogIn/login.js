import React, { Component } from 'react'
import axios from "axios";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import ViewAll from '../ViewAll'
import Header from '../Layout/Header'

import Profile from '../Persons/PersonProfile'
import UsersPost from '../Post/UserPost'
import EmployeesPost from '../Post/EmployeesPost'
import BusinessesPost from '../Post/BusinessesPost'
import BookingsPost from '../Post/BookingsPost'
import AddBooking from '../Booking/AddBooking';


const APIUser = "http://localhost:8080/api/user/login"
const APIEmployee = "http://localhost:8080/api/employee/login"
const axiosConfig = {headers: {'Content-Type': 'application/json'}}

async function getUserConfirm(personIdentifier, password, isEmployee) {
    if(isEmployee) {
        return await axios.post(APIEmployee, {
            personIdentifier: personIdentifier,
            password: password
        }, axiosConfig)
            .then(res => {
                return [true, res]
            })
            .catch(error => {
                console.error(error)
                return [false, error]
            })
    } else {
        return await axios.post(APIUser, {
            personIdentifier: personIdentifier,
            password: password
        }, axiosConfig)
            .then(res => {
                return [true, res]
            })
            .catch(error => {
                console.error(error)
                return [false, error]
            })
    }
}

class Login extends Component {
    constructor() {
        super();

        this.state = {
            personIdentifier: null,
            password: "",
            address: "",
            ph_num: "",
            isEmployee: false,
            token: null,
            isLoggedIn: false,
            businessIdentifier: null,
            counter: 0
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleChange(event) {
        this.setState({isEmployee: !this.state.isEmployee});
        console.log(this.state.isEmployee)
    }

    async onSubmit(e) {
        e.preventDefault();

        
        const success = await getUserConfirm(this.state.personIdentifier, this.state.password, this.state.isEmployee).then()
        

        if(this.state.isEmployee) {
            if (success[0]) {
                console.log(success[1].data["personIdentifier"])
                this.setState({personIdentifier: success[1].data["personIdentifier"]})
                this.setState({password: success[1].data["password"]})
                this.setState({address: success[1].data["address"]})
                this.setState({ph_Num: success[1].data["phone"]})
                this.setState({token: success[1].data["token"]})
                this.setState({businessIdentifier: success[1].data["businessId"]})
                this.setState({isLoggedIn: true})
            } else {
                this.setState({isLoggedIn: false})
                this.state.counter = 1
                alert("Incorrect Username or Password")
            }
            console.log("is logged in: " + this.state.isLoggedIn)
        } else {
            if (success[0]) {
                console.log(success[1].data["personIdentifier"])
                this.setState({personIdentifier: success[1].data["personIdentifier"]})
                this.setState({password: success[1].data["password"]})
                this.setState({address: success[1].data["address"]})
                this.setState({ph_Num: success[1].data["phone"]})
                this.setState({token: success[1].data["token"]})
                this.setState({isLoggedIn: true})
            } else {
                this.setState({isLoggedIn: false})
                this.state.counter = 1
                alert("Incorrect Username or Password")
            }
    
            console.log("is logged in: " + this.state.isLoggedIn)
        }
        

    }


    render() {
        if(!this.state.isLoggedIn) {
            return (
                <div className="project">
                    <Header 
                        personIdentifier={this.props.personIdentifier}
                        address={this.props.address}
                        ph_Num={this.props.ph_Num}
                        token={this.props.token}
                        isEmployee={this.state.isEmployee}
                        businessIdentifier={this.state.businessIdentifier}/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-4 m-auto">
                                <h5 className="display-4 text-center">Login</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control-lg" placeholder="Username"
                                            // disabled 
                                            name="personIdentifier"
                                            value={this.state.personIdentifier}
                                            onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control-lg " placeholder="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange} />
                                    </div>

                                    <div>
                                        <label>
                                            <input
                                            type="checkbox"
                                            defaultChecked={this.state.isEmployee}
                                            onChange={this.handleChange}
                                            />   {"<-- Are You An Employee?"}
                                        </label>    
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(this.state.isLoggedIn) {
            return(
                <div>
                    <Router>
                        <div>
                            <Route exact path="/viewAll" render={(props) => (
                                <ViewAll {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>

                            <Route exact path="/logout" render={(props) => (
                                <Login {...props}/>
                            )}/>

                            <Route exact path="/profile" render={(props) => (
                                <Profile {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>
                            
                            <Route exact path="/allUsers" render={(props) => (
                                <UsersPost {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>

                            <Route exact path="/allEmployees" render={(props) => (
                                <EmployeesPost {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>

                            <Route exact path="/allBusinesses" render={(props) => (
                                <BusinessesPost {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>

                            <Route exact path="/allBookings" render={(props) => (
                                <BookingsPost {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>

                            <Route exact path="/booking" render={(props) => (
                                <AddBooking {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>
                            

                            <Redirect to="/profile" render={(props) => (
                                <Profile {...props} 
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}
                                    isEmployee={this.state.isEmployee}
                                    businessIdentifier={this.state.businessIdentifier}/>
                            )}/>
                        </div>
                    </Router>
                </div>
            )
        }
        if(!this.state.isLoggedIn) {
            return(
                <Router>
                    <div className = "Login_Ui">
                        <Redirect to= "/login" component={Login}/>
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            )
        }

    }
}
export default Login;