import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
//Si aun te rompes con CSS, imaginate con iconos, import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

function Navbar() {
  const islogin = useSelector((state) => state.auth);
  const usuario = useSelector((state) => state.artist.usuario);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img
          className="nav-title-img"
          src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682542442/UrbanClub/Urban_Club_Logo_fh8zlb.png"
          alt=""
        />
        <img
          className="nav-title-img-zoom"
          src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682996222/UrbanClub/carrousel/Urban_Club_Logo_Single_de3jqi.png"
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
        <li>
          {
            islogin.isAuthenticated &&
            <NavLink to={`/createevent/${usuario.id}`} className="nav-link active">
              Crear Evento 😄
            </NavLink>
          }

        </li>
        <li>
          <NavLink to="/merch" className="nav-link active">
            Tienda
          </NavLink>
        </li>
      </ul>
      {!islogin.isAuthenticated ? (
        <NavLink to="/login">
          <button className="nav-login-btn">Ingresar</button>
          <button className="nav-login-btn-zoom">Ingresar</button>
        </NavLink>
      ) : (
        <NavLink to={`/profile/${islogin.user.id}`}>
          <img
            className="sesionfoto"
            src={usuario.profilePhoto}
            alt="No hay"
          />
          <img
            className="sesionfotozoom"
            src={usuario.profilePhoto}
            alt="No hay"
          />
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
