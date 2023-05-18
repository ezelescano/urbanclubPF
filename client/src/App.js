import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import CreateEvent from "./components/createEvent/CreateEvent";
import CreateEventTemplate from "./components/createEvent/CreateEventTemplate";
import Footer from "./components/Footer/Footer";
// import Merch from "./components/Merch/Merch"
import Maps from "./components/Maps/Maps";

//verificacion del token
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import { loginSuccess, logout } from "./redux/authSlice";
//import { Redirect } from 'react-router-dom';
import AboutEze from "./components/AboutUs/AboutEze";
import Errors404 from "./components/Error404/Errors404";
import Messenger from "./components/Messenger/Messenger";
import LoginSuccess from "./components/GoogleButton/loginSuccess";
// reemplazar 3001 por https://pruebaback-production-0050.up.railway.app
import UpdateEvents from "./components/updateEvent/UpdateEvents";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import NewPassword from "./components/NewPassword/NewPassword";
import DetailsEvents from "./components/ComponentEvents/DetailsEvents/DetailsEvents";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import Admin from "./components/Admin/Admin";
import AboutMiguel from "./components/AboutUs/AboutMiguel";
import AboutAlan from "./components/AboutUs/AboutAlan";
import AboutPablo from "./components/AboutUs/AboutPablo";
import AboutAlex from "./components/AboutUs/AboutAlex";
import AboutEudes from "./components/AboutUs/AboutEudes";
/* import { io } from "socket.io-client";
const socket = io("http://localhost:8900"); */

function App() {
  const dispatch = useDispatch();
  //const history = useHistory();
  const user = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
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
  const isMessengerPage = location.pathname === "/messenger";
  /* useEffect(() => {
    if(user.isAuthenticated){
      socket.emit("addUser", user.user.id);
    }
  },[user]) */

  //No modifiquen cosas que estan bien solo buscando un error de ustedes plsssssssssssssssssssssssssss, Gracias :))
  const isMessengerOrProfileRoute =
    window.location.pathname.includes("/messenger") ||
    window.location.pathname.includes("/profile/") ||
    window.location.pathname.includes("/admin");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!user.isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/login/success" element={<LoginSuccess />}></Route>
        <Route
          path="/register"
          element={!user.isAuthenticated ? <Register /> : <Navigate to="/" />}
        />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="/profileEdit/:id"
          element={
            user.isAuthenticated ? <ProfileEdit /> : <Navigate to="/login" />
          }
        />
        <Route path="/artists" element={<Artists />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events showFilters={true} />} />
        <Route
          path="/createevent/:id"
          element={
            user.isAuthenticated ? <CreateEvent /> : <Navigate to="/login" />
          }
        />
        <Route path="/createeventtemplate" element={<CreateEventTemplate />} />
        <Route path="/About/Estiven" element={<AboutEstiven />} />
        <Route path="/About/oscar" element={<AboutOscar />} />
        <Route path="/About/Eze" element={<AboutEze />} />
        <Route path="/About/Miguel" element={<AboutMiguel />} />
        <Route path="/About/Alan" element={<AboutAlan />} />
        <Route path="/About/Pablo" element={<AboutPablo />} />
        <Route path="/About/Alex" element={<AboutAlex />} />
        <Route path="/About/Eudes" element={<AboutEudes />} />

        <Route
          path="/messenger"
          element={
            user.isAuthenticated ? <Messenger /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/updateEvent"
          element={
            user.isAuthenticated ? <UpdateEvents /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/forgotPassword"
          element={
            !user.isAuthenticated ? <ForgotPassword /> : <Navigate to="/" />
          }
        />
        <Route path="/newPassword/:id/:token" element={<NewPassword />} />
        <Route path="/detailEvent/:id" element={<DetailsEvents />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        {/* <Route
          path="/admin"
          element={user.isAuthenticated ? <Admin /> : <Navigate to="/login" />}
        /> */}

        <Route path="*" element={<Errors404 />} />
      </Routes>
      {!isMessengerPage && <Footer />}
    </div>
  );
}

export default App;
