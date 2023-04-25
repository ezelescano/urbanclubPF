import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="active">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
