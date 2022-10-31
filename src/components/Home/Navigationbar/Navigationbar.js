import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {  signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navigationbar = () => {
  let parsedmediExpressUser = {};
  if (localStorage.getItem('mediExpressUser') === null) {
    const newUser = {};
    localStorage.setItem('mediExpressUser', JSON.stringify(newUser));
  }
  else {
    const getUserInfo = localStorage.getItem('mediExpressUser');
    const parsedGetUserInfo = JSON.parse(getUserInfo);
    parsedmediExpressUser.Name = parsedGetUserInfo.Name;
    parsedmediExpressUser.Email = parsedGetUserInfo.Email;
    parsedmediExpressUser.UserType = parsedGetUserInfo.UserType;
    parsedmediExpressUser.Sex = parsedGetUserInfo.Sex;
    parsedmediExpressUser.isSignedIn = parsedGetUserInfo.isSignedIn;


  }
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    const loggedOutUserInfo = {};
    localStorage.setItem('mediExpressUser', JSON.stringify(loggedOutUserInfo));
    window.location.reload();
  }
  // const logout = () => {
  //   signOut(auth);
  // }
  return (
    <div style={{ "backgroundColor": "#9AD1F6" }}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to='/' style={{ "textDecoration": "none" }}><a class="navbar-brand" href="#" style={{ "color": "white" }}>MediExpress</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ "color": "white" }}>About Us</a>
              </li>
              <li class="nav-item">
                <Link to='/appointment' style={{ "textDecoration": "none" }}><a class="nav-link" href="#" style={{ "color": "white" }}>Appointment</a></Link>

              </li>
              <li class="nav-item">
                <Link to='/dashboard' style={{ "textDecoration": "none" }}><a class="nav-link" href="#" style={{ "color": "white" }}>DashBoard</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/blogs' style={{ "textDecoration": "none" }}><a class="nav-link" style={{ "color": "white" }}>Blogs</a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{ "color": "white" }}>Contact Us</a>
              </li>
              {
                parsedmediExpressUser.isSignedIn ? (<Link to='/' style={{ "textDecoration": "none" }}> <Button variant="contained" onClick={handleSignOut}>LogOut</Button> </Link>) : (<Link to='/login' style={{ "textDecoration": "none" }}> <Button variant="contained" >Login</Button> </Link>)
              }
              

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigationbar;