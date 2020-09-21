import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header'
import "bootstrap/dist/css/bootstrap-grid.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddPerson from './components/Persons/AddPerson';
import { Provider } from "react-redux";
import store from "./store";
import AddBusiness from './components/Business/AddBusiness';
import AddEmployee from './components/Persons/AddEmployee';
import AddBooking from './components/Booking/AddBooking';

import PersonsPost from './components/Post/PersonsPost'
import EmployeesPost from './components/Post/EmployeesPost'
import BusinessesPost from './components/Post/BusinessesPost'
import BookingsPost from './components/Post/BookingsPost'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addPerson" component={AddPerson} />
          <Route path="/addBusiness" component={AddBusiness} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/booking" component={AddBooking} />

          <Route path="/allPersons" component={PersonsPost} />
          <Route path="/allEmployees" component={EmployeesPost} />
          <Route path="/allBusinesses" component={BusinessesPost} />
          <Route path="/allBookings" component={BookingsPost} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
