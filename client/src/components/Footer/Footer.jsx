import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import gglftr from "./img/ggl-ftr.png";
import fbftr from "./img/fb-ftr.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import {EMAIL_ADDRES} from "../../env"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={style.footerContainer}>
      <div className={style.footerText}>
        <NavLink to="/" className={style.link} onClick={scrollToTop}>
          <img
            src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1683987657/UrbanClub/urbanclubBanner_jgk112.png"
            alt=""
          />
        </NavLink>
      </div>
      <div className={style.footerText}>
        <h3>Enlaces Utiles</h3>
        <br />
        <ul className={style.footLinks}>
          <li>
            <NavLink
              to="/register"
              className={style.link}
              onClick={scrollToTop}
            >
              Crea una cuenta
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={style.link} onClick={scrollToTop}>
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/termsAndConditions"
              className={style.link}
              onClick={scrollToTop}
            >
              Términos y Condiciones
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Contactenos</h3>
        <a
          href="https://www.facebook.com/profile.php?id=100068893039514"
          target="_blank"
          rel="noreferrer"
          style={{
            cursor: "pointer",
            fontSize: "50px",
            color: "white",
          }}
        >
          <FacebookIcon
            style={{
              fontSize: "50px",
              color: "#ccf1fd",
            }}
          />
        </a>
        <a
          href= {`${EMAIL_ADDRES}`}
          target="_blank"
          rel="noreferrer"
        >
          <GoogleIcon style={{ fontSize: "50px", color: "#ccf1fd" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
