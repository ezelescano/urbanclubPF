import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
//Si aun te rompes con CSS, imaginate con iconos, import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../SearchBar/SearchBar";
function Navbar() {
  return (
    <nav className="navbar">
          <NavLink to="/">
            <img
              className="nav-title-img"
              src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682542442/UrbanClub/Urban_Club_Logo_fh8zlb.png"
              alt=""
            />
          </NavLink>
        <div className="searchbar-wrapper">
          <SearchBar/>
        </div>
        {/*<SearchIcon style={{color:"white"}}/>*/}
        <ul className="nav-links">
        <li>
          <NavLink to="/artists" className="nav-link active">
            Artistas
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className="nav-link active">
            Acerca de
          </NavLink>
        </li>
        </ul>
        <NavLink to="/login" >
          <button className="nav-login-btn">Ingresar</button>
        </NavLink>
        
    </nav>
  );
}

export default Navbar;
