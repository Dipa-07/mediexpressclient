import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigationbar from './components/Home/Navigationbar/Navigationbar';
import Login from './components/Signup/Login';
import Signup from './components/Signup/Signup';
import PrivateRoute from './components/Signup/PrivateRoute';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import AppointmentForm from './components/Appointment/AppointmentForm/AppointmentForm';
import DoctorAdvice from './components/Videocalling/DoctorAdvice';
import React, { Component }  from 'react';
import Blogs from './components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar></Navigationbar>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/confirmation/:dId">
            <AppointmentForm></AppointmentForm>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
