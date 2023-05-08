import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AboutEstiven from "./components/AboutUs/AboutEstiven";
import AboutOscar from "./components/AboutUs/AboutOscar";
//Los "Acerca De" Arriba
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Artists from "./components/Artists/Artists";
import Events from "./components/Events/Events";
import CreateEvent from"./components/createEvent/CreateEvent";
import CreateEventTemplate from "./components/createEvent/CreateEventTemplate";
import Footer from "./components/Footer/Footer"
import Merch from "./components/Merch/Merch"
import Maps from "./components/Maps/Maps";

//verificacion del token
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { loginSuccess, logout } from './redux/authSlice';
//import { Redirect } from 'react-router-dom';
import AboutEze from "./components/AboutUs/AboutEze";
import Errors404 from "./components/Error404/Errors404";
import Messenger from "./components/Messenger/Messenger";
/* import { io } from "socket.io-client";
const socket = io("http://localhost:3001"); */

import UpdateEvents from "./components/updateEvent/UpdateEvents";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import NewPassword from "./components/NewPassword/NewPassword";
import DetailsEvents from "./components/ComponentEvents/DetailsEvents/DetailsEvents";

function App() {
  const dispatch = useDispatch();
  //const history = useHistory();
  const user = useSelector(state => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logout());
        //history.push('/login');
      } else {
        const decodedToken = jwtDecode(token);
        dispatch(loginSuccess({ token }));
        const timeout = decodedToken.exp * 1000 - Date.now();
        setTimeout(() => {
          dispatch(logout());
          //history.push('/login');
        }, timeout);
      }
    }
  }, [dispatch]);

  /* useEffect(() => {
    if(user.isAuthenticated){
      socket.emit("addUser", user.user.id);
    }
  },[user])
 */

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!user.isAuthenticated ?( <Login /> ) : (<Navigate to="/" />)} />
        <Route path="/register" element={!user.isAuthenticated ?( <Register /> ) : (<Navigate to="/" />)} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profileEdit/:id" element={user.isAuthenticated ? (<ProfileEdit />) : (<Navigate to="/login" />)} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/createevent/:id" element={user.isAuthenticated ? (<CreateEvent />) : (<Navigate to="/login" />)} />
        <Route path="/createeventtemplate" element={<CreateEventTemplate />} />
        <Route path="/About/Estiven" element={<AboutEstiven />} />
        <Route path="/About/oscar" element={<AboutOscar />} />
        <Route path="/About/Eze" element={<AboutEze />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/messenger" element={user.isAuthenticated ? (<Messenger />) : (<Navigate to="/login" />)} />
        <Route path="/updateEvent" element={user.isAuthenticated ? (<UpdateEvents/>) : (<Navigate to="/login" />)} />
        <Route path="/forgotPassword" element={!user.isAuthenticated ? (<ForgotPassword />) : (<Navigate to="/" />)}/>
        <Route path="/newPassword/:id" element={!user.isAuthenticated ? (<NewPassword />) : (<Navigate to="/" />)} />
        <Route path="/detailEvent/:id" element={<DetailsEvents />} />
        <Route path="/Maps" element={<Maps />} />

        <Route path="*" element={<Errors404 />} />
      </Routes>
      {window.location.pathname !== '/messenger' && window.location.pathname !== '/profile/:id' && <Footer />}
    </div>
  );
}

export default App;
