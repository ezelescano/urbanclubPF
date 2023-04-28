import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
//Si aun te rompes con CSS, imaginate con iconos, import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

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
          <input
            className="searchbar"
            placeholder="¿Qué artista quieres ver hoy?"
          />
          <i className="search-icon">
            <SearchIcon />
          </i>
        </div>


        {/*<SearchIcon style={{color:"white"}}/>*/}
        <ul className="nav-links">
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
            {/*<KeyboardArrowDownIcon style={{ position: "fixed" }} /> Lo siento chevron, Pero estás mal fixeado*/}
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutMe" className="nav-link active">
            Acerca de
          </NavLink>
        </li>
        </ul>
        
        <NavLink to="/login" >
          <button className="nav-login-btn">ingresar</button>
        </NavLink>
        
    </nav>
  );
}

export default Navbar;
