import React, { Component } from 'react'
import axios from "axios";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Dashboard from '../Dashboard'


const APIUser = "http://localhost:8080/api/user/login"
const APIEmployee = "http://localhost:8080/api/employee/"
const axiosConfig = {headers: {'Content-Type': 'application/json'}}

async function getUserConfirm(personIdentifier, password, isEmployee) {
    if(isEmployee) {
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
            personIdentifier: "",
            password: "",
            address: "",
            ph_num: "",
            isEmployee: false,
            token: null,
            isLoggedIn: false,
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

        // if(document.getElementById("personIdentifier").value == null || document.getElementById("password").value == null){
        //     alert("Please enter a username and password.")
        //     return
        // }

        
        const success = await getUserConfirm(this.state.personIdentifier, this.state.password).then()
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
        }

        console.log("is logged in: " + this.state.isLoggedIn)



        // const loginDetail = {
        //     personIdentifier: this.state.personIdentifier,
        //     password: this.state.password
        // }
    }


    render() {
        if(!this.state.isLoggedIn) {
            return (
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">LOGINNNNNNNNNNNNNNNNNNNNnn</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Username"
                                            // disabled 
                                            name="personIdentifier"
                                            value={this.state.personIdentifier}
                                            onChange={this.onChange} />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-lg " placeholder="password"
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
                                            />        Are You An Employee sir?
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
        console.log("is logged in: " + this.state.isLoggedIn)
        if(this.state.isLoggedIn) {
            return(
                <div>
                    <Router>
                        <div>

                            <Route exact path="/dashboard" render={(props) => (
                                <Dashboard {...props}
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}/>
                            )}/>

                            <Redirect to="/dashboard" render={(props) => (
                                <Dashboard {...props} 
                                    personIdentifier={this.state.personIdentifier}
                                    address={this.state.address}
                                    ph_Num={this.state.ph_Num}
                                    token={this.state.token}/>
                            )}/>
                        </div>
                    </Router>
                </div>
            )
        } else if(!this.state.isLoggedIn){
            alert("Incorrect password or username.")
            return(
                <Router>
                    <div className = "Login_Ui">
                        <Redirect to= "/login" component={Login}/>
                        <Route path="/login" component={Login} />
                    </div>
                </Router>
            )
        }
        // <Route exact path="/dashboard" render={(props) => (
        //     <Dashboard {...props}
        //         id={this.state.id}
        //         userName={this.state.userName}
        //         address={this.state.address}
        //         phone={this.state.phone}
        //         userType={this.state.userType}
        //         token={this.state.token}/> 
        // )}  />

        // <Route path="/profile" render={(props) => (
        //     <PersonProfile {...props}/>
                
        // )}/>
                
                //{/*}
                    // <Route exact path="/logout" render={(props) => (
                    //     <LoginScreen {...props}/>
                            
                    // )}/>
            //         <Route exact path="/bookings" render={(props) => (
            //             <BookingScreen {...props}
            //                 id={this.state.id}
            //                 userName={this.state.userName}
            //                 address={this.state.address}
            //                 phone={this.state.phone}
            //                 userType={this.state.userType}
            //                 token={this.state.token}/>
            //         )}/>
            //         <Route exact path="/my_bookings" render={(props) => (
            //             <MyBookingsScreen {...props}
            //                 id={this.state.id}
            //                 userName={this.state.userName}
            //                 address={this.state.address}
            //                 phone={this.state.phone}
            //                 userType={this.state.userType}
            //                 token={this.state.token}/>
            //         )}/>
            //         <Route exact path="/cancel" render={(props) => (
            //             <CancelBookingScreen {...props}
            //                 id={this.state.id}
            //                 userName={this.state.userName}
            //                 address={this.state.address}
            //                 phone={this.state.phone}
            //                 userType={this.state.userType}
            //                 token={this.state.token}/>
            //         )}/>
            //         <Route exact path="/profile" render={(props) => (
            //             <ProfileScreen {...props}
            //                 id={this.state.id}
            //                 userName={this.state.userName}
            //                 address={this.state.address}
            //                 phone={this.state.phone}
            //                 userType={this.state.userType}
            //                 token={this.state.token}/>
            //         )}/>
            //         <Route exact path="/history" render={(props) => (
            //             <HistoryScreen {...props}
            //                 id={this.state.id}
            //                 userName={this.state.userName}
            //                 address={this.state.address}
            //                 phone={this.state.phone}
            //                 userType={this.state.userType}
            //                 token={this.state.token}/>
            //         )}/>
            //         <Redirect to="/dashboard" render={(props) => (
            //             <Dashboard {...props} 
            //                 id={this.state.id}
            //                 userName={this.state.userName}
            //                 address={this.state.address}
            //                 phone={this.state.phone}
            //                 userType={this.state.userType}
            //                 token={this.state.token}/>
            //         )}/>
                    
            //     </div>
            // </Router>
            // )
        // }
                //*/}
        // else {
        //     alert("Incorrect password or username.")
        //     return(
        //         <Router>
        //             <div className = "Login_Ui">
        //                 <Redirect to= "/login" component={Login}/>
        //                 <Route path="/login" component={Login} />
        //             </div>
        //         </Router>
        //     )
        // }


    }
}
export default Login;