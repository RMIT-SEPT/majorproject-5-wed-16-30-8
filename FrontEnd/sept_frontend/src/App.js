import React from 'react';
import './App.css';
import ViewAll from './components/ViewAll';
import "bootstrap/dist/css/bootstrap-grid.css"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
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

import Login from './components/LogIn/login'
import SignUp from './components/Persons/SignUp'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route exact path="/logout"><Redirect to="/login" /></Route>
          <Route path="/viewAll" component={ViewAll} />
          <Route path="/signup" component={SignUp} />
          <Route path="/addUser" component={AddUser} />
          <Route path="/addBusiness" component={AddBusiness} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/booking" component={AddBooking} />

          <Route path="/allUsers" component={UsersPost} />
          <Route path="/allEmployees" component={EmployeesPost} />
          <Route path="/allBusinesses" component={BusinessesPost} />
          <Route path="/allBookings" component={BookingsPost} />

          <Route path="/profile" component={PersonProfile} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;