import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="nav-link active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/artistas" className="nav-link active">
            Artistas
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
