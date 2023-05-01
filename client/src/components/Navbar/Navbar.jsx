import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
//Si aun te rompes con CSS, imaginate con iconos, import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";




function Navbar() {

  const islogin = useSelector(state => state.auth);

 

   
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
        <SearchBar />
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
        <li>
          <NavLink to="/events" className="nav-link active">
            Eventos
          </NavLink>
        </li>
      </ul>
      {!islogin.isAuthenticated ? <NavLink to="/login">
        <button className="nav-login-btn">Ingresar</button>
      </NavLink>
        :<NavLink to={`/profile/${islogin.user.id}`}>
          <img className="sesionfoto" src={islogin.user.profilePhoto} alt="No hay"/>
          </NavLink>}
        
    </nav>
  );
}

export default Navbar;
