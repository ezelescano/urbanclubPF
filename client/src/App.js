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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
