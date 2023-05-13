import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import gglftr from "./img/ggl-ftr.png";
import fbftr from "./img/fb-ftr.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={style.footerContainer}>
      <div className={style.footerText}>
        <h3>Atencion al cliente</h3>
        <br />
        <h5>Av. Corrientes 500</h5>
        <br />
        Lunes a Viernes <br />
        08:00 a 18:00h <br />
        <h4>Teléfono </h4>
        {"(+54) 93487 477269"}
      </div>
      <div className={style.footerText}>
        <h3>Enlaces Utiles</h3>
        <br />
        <ul className={style.footLinks}>
          <li>
            <NavLink to="/register" className={style.link} onClick={scrollToTop}>
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
          style={{ cursor: "pointer" }}
        >
          <img className={style.ftrImg} src={fbftr} alt=""></img>
        </a>
        <a
          href="https://drive.google.com/drive/folders/1KaKgiDDZ4VnWFAYnxHlJ96JboY1RU6hK"
          target="_blank"
          rel="noreferrer"
        >
          <img className={style.ftrImg} src={gglftr} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
