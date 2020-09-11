import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header'
import "bootstrap/dist/css/bootstrap-grid.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddPerson from './components/Persons/AddPerson';
import {Provider} from "react-redux";
import store from "./store";
import AddBusiness from './components/Business/AddBusiness';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
       <Header/>
       <Route path="/dashboard" component={Dashboard}/>
       <Route path="/addPerson" component={AddPerson}/>
       <Route path="/addBusiness" component={AddBusiness}/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
