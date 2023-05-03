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
import AboutEstiven from "./components/AboutUs/AboutEstiven";
import Events from "./components/Events/Events";
import CreateEvent from"./components/createEvent/CreateEvent";
import Footer from "./components/Footer/Footer"
import Merch from "./components/Merch/Merch"
import Merch from "./components/Merch/Merch"

//verificacion del token
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { loginSuccess, logout } from './redux/authSlice';
import { Redirect } from 'react-router-dom';
import AboutEze from "./components/AboutUs/AboutEze";
import Errors404 from "./components/Error404/Errors404";

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
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/About/Estiven" element={<AboutEstiven />} />
        <Route path="/About/eze" element={<AboutEze/>} />
        <Route path="/merch" element={<Merch />} />
        <Route path="*" element={<Errors404/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
