import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
//Si aun te rompes con CSS, imaginate con iconos, import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const islogin = useSelector((state) => state.auth);
  const usuario = useSelector((state) => state.auth.user);

  return (
    <nav className={style.navbar}>
      <NavLink to="/">
        <img
          className={style.navTitleImg}
          src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682542442/UrbanClub/Urban_Club_Logo_fh8zlb.png"
          alt=""
        />
        <img
          className={style.navTitleImgZoom}
          src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682996222/UrbanClub/carrousel/Urban_Club_Logo_Single_de3jqi.png"
          alt=""
        />
      </NavLink>
      <div className={style.searchbarWrapper}>
        <SearchBar />
      </div>
      {/*<SearchIcon style={{color:"white"}}/>*/}
      <ul className={style.navLinks}>
        <li>
          <NavLink to="/artists" className={`${style.navLink} ${style.active}`}>
            Artistas
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" className={`${style.navLink} ${style.active}`}>
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={`${style.navLink} ${style.active}`}>
            Eventos
          </NavLink>
        </li>

        <li>
          <NavLink to="/merch" className={`${style.navLink} ${style.active}`}>
            Tienda
          </NavLink>
        </li>
        {islogin.isAuthenticated && 
        <li>
        <NavLink to="/messenger" className="nav-link active">
          Chat
        </NavLink>
      </li>}
        
      </ul>
      <div className={style.burgerSelect}>
        <button className={style.hamburgerBtn}>☰</button>
        <ul className={style.respNavLinks} id="navLinks">
          <li>
            <NavLink
              to="/artists"
              className={`${style.navLink} ${style.active}`}
            >
              Artistas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={`${style.navLink} ${style.active}`}
            >
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={`${style.navLink} ${style.active}`}
            >
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink to="/merch" className={`${style.navLink} ${style.active}`}>
              Tienda
            </NavLink>
          </li>
        </ul>
      </div>

      {!islogin.isAuthenticated ? (
        <NavLink to="/login">
          <button className={style.navLoginBtn}>Ingresar</button>
          <button className={style.navLoginBtnZoom}>Ingresar</button>
        </NavLink>
      ) : (
        
        <NavLink to={`/profile/${islogin.user.id}`}>
          
          <img
          
            className={style.sesionfoto}
            src={usuario.profilePhoto}
            alt="No hay"
          />
          <img
            className={style.sesionfotozoom}
            src={usuario.profilePhoto}
            alt="No hay"
          />
        </NavLink >
      )}
    </nav>
  );
}

export default Navbar;
