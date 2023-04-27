import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-title">
        <li>
          <img
            className="nav-title-img"
            src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682542442/UrbanClub/Urban_Club_Logo_fh8zlb.png"
            alt=""
          />
        </li>
      </ul>
      <ul className="nav-links">
        <input
          className="searchbar"
          name="searchbar"
          placeholder="¿Qué artista quieres ver hóy?"></input>
        {/*<SearchIcon style={{color:"white"}}/>*/}
        <li>
          <NavLink to="/artists" className="nav-link active">
            Artistas
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="nav-link active">
            Eventos
          </NavLink>
        </li>
        <li>
          <NavLink to="/merch" className="nav-link active merch">
            Tienda / Merchandising
            <KeyboardArrowDownIcon style={{ position: "fixed" }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutMe" className="nav-link active">
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link active login">
            Ingresar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
