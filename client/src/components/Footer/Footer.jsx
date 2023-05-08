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
      <div>
        <h3>Atencion al cliente</h3>
        <br />
        <h5>Av. Corrientes 500</h5>
        <br />
        <h4>DPTO DE VENTAS</h4>
        Lunes a Sabado <br />
        08:00 a 18:00h
        <br /> <br />
        <h4>DPTO DE SOPORTE</h4>
        Lunes a Viernes <br />
        08:00 a 18:00h <br />
      </div>
      <div>
        <h3>Enlaces Utiles</h3>
        <br />
        <ul className={style.footLinks}>
          <li>
            <NavLink to="/" className={style.link} onClick={scrollToTop}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={style.link} onClick={scrollToTop}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.facebook.com/legal/terms"
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              Términos y Condiciones
            </a>
          </li>
        </ul>
      </div>
      <div>
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
          style={{ cursor: "pointer" }}
        >
          <img className={style.ftrImg} src={gglftr} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
