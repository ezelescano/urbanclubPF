import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
//import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
//Si aun te rompes con CSS, imaginate con iconos, import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const islogin = useSelector((state) => state.auth);
  const usuario = useSelector((state) => state.auth.user);

  const [navLinksVisible, setNavLinksVisible] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const handleHamburgerClick = () => {
    setNavLinksVisible(!navLinksVisible);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <nav className={`${style.navbar} ${isScrolled ? style.scrolled : ""}`}>
        <NavLink to="/" onClick={scrollToTop}>
          <img
            className={style.navTitleImg}
            src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683969976/UrbanClub/our_logo-removebg-preview_auto_x2-removebg-preview_1_tsbanf.png"
            alt=""
          />
          <img
            className={style.navTitleImgZoom}
            src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683969976/UrbanClub/our_logo-removebg-preview_auto_x2-removebg-preview_1_tsbanf.png"
            alt=""
          />
          <img
            className={style.navTitleImgText}
            src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1684272293/filename_5_jnxox9.png"
            alt=""
          />
        </NavLink>
        {/* <div className={style.searchbarWrapper} onClick={scrollToTop}></div> */}
        {/* <SearchBar /> Estó en deploy está roto*/}

        {/*<SearchIcon style={{color:"white"}}/>*/}
        <ul className={style.navLinks}>
          {/* <li>
            <NavLink to="/admin" className={`${style.navLink} ${style.active}`}>
              Admin
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/artists"
              className={`${style.navLink} ${style.active}`}
              onClick={scrollToTop}
            >
              Artistas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={`${style.navLink} ${style.active}`}
              onClick={scrollToTop}
            >
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={`${style.navLink} ${style.active}`}
              onClick={scrollToTop}
            >
              Eventos
            </NavLink>
          </li>
          {/* <li>  // ! Comentada la tienda
          <NavLink to="/merch" className={`${style.navLink} ${style.active}`}>
            Tienda
          </NavLink>
        </li> */}
          {islogin.isAuthenticated && (
            <li>
              <NavLink
                to="/messenger"
                className="nav-link active"
                onClick={scrollToTop}
              >
                Chat
              </NavLink>
            </li>
          )}
        </ul>
        <div className={style.burgerSelect}>
          <button className={style.hamburgerBtn} onClick={handleHamburgerClick}>
            ☰
          </button>
          <ul
            className={`${style.respNavLinks} ${
              navLinksVisible ? style.slideIn : style.slideOut
            }`}
            id="navLinks"
          >
            <li>
              <NavLink
                to="/artists"
                className={`${style.navLink} ${style.active}`}
                onClick={scrollToTop}
              >
                Artistas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={`${style.navLink} ${style.active}`}
                onClick={scrollToTop}
              >
                Acerca de
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={`${style.navLink} ${style.active}`}
                onClick={scrollToTop}
              >
                Eventos
              </NavLink>
            </li>
            {/* <li>  // ! Comentada la tienda
            <NavLink to="/merch" className={`${style.navLink} ${style.active}`}>
              Tienda
            </NavLink>
          </li> */}{" "}
            {!islogin.isAuthenticated ? (
              <NavLink to="/login" onClick={scrollToTop}>
                <button className={style.navLoginBtnZoom}>Ingresar</button>
              </NavLink>
            ) : (
              <NavLink to={`/profile/${islogin.user.id}`} onClick={scrollToTop}>
                <img
                  className={style.sesionfotozoom}
                  src={usuario.profilePhoto}
                  alt="No hay"
                />
              </NavLink>
            )}
            {islogin.isAuthenticated && (
              <li>
                <NavLink
                  to="/messenger"
                  className="nav-link active"
                  onClick={scrollToTop}
                >
                  Chat
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="profilePicture">
          {!islogin.isAuthenticated ? (
            <NavLink to="/login" onClick={scrollToTop}>
              <button className={style.navLoginBtn}>Ingresar</button>
            </NavLink>
          ) : (
            <NavLink to={`/profile/${islogin.user.id}`} onClick={scrollToTop}>
              <img
                className={style.sesionfoto}
                src={usuario.profilePhoto}
                alt="No hay"
              />
            </NavLink>
          )}
        </div>
      </nav>
      <div style={{ height: navbarHeight, backgroundColor: "#000000" }}></div>
    </>
  );
}

export default Navbar;
