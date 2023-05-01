import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Profile from "./components/Profile/Profile";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Artists from "./components/Artists/Artists";
import AboutUs from "./components/AboutUs/AboutUs";
import Events from "./components/Events/Events"

//verificacion del token
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { loginSuccess, logout } from './redux/authSlice';
import { Redirect } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  //const history = useHistory();
  //const token = useSelector(state => state.auth.token)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logout());
        //history.push('/login');
      } else {
        dispatch(loginSuccess({ token }));
        const timeout = decodedToken.exp * 1000 - Date.now();
        setTimeout(() => {
          dispatch(logout());
          //history.push('/login');
        }, timeout);
      }
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profileEdit/:id" element={<ProfileEdit />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
