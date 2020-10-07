import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header'
import "bootstrap/dist/css/bootstrap-grid.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddUser from './components/Persons/AddUser';
import { Provider } from "react-redux";
import store from "./store";
import AddBusiness from './components/Business/AddBusiness';
import AddEmployee from './components/Persons/AddEmployee';
import AddBooking from './components/Booking/AddBooking';

import UsersPost from './components/Post/UserPost'
import EmployeesPost from './components/Post/EmployeesPost'
import BusinessesPost from './components/Post/BusinessesPost'
import BookingsPost from './components/Post/BookingsPost'
import PersonProfile from './components/Persons/PersonProfile';
import UpdatePerson from './components/Persons/UpdatePerson';

import login from './components/LogIn/login';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={AddUser} />
          <Route path="/addBusiness" component={AddBusiness} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/booking" component={AddBooking} />

          <Route path="/allUsers" component={UsersPost} />
          <Route path="/allEmployees" component={EmployeesPost} />
          <Route path="/allBusinesses" component={BusinessesPost} />
          <Route path="/allBookings" component={BookingsPost} />

          <Route path="/profile" component={PersonProfile} />
          <Route path="/updateUser" component={UpdatePerson} />
          <Route path="/login" component={login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
