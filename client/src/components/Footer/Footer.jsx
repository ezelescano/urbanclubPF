import "./Footer.css";
import React from "react";
import { NavLink } from "react-router-dom";
import gglftr from "./img/ggl-ftr.png"
import fbftr from "./img/fb-ftr.png"

const Footer = () => {

  return (
    <div className="footer-container">
      <div>
      <h3>Atencion al cliente</h3><br />
<h4>DPTO DE VENTAS</h4>
Lunes a Sabado <br /> 
08:00 a 18:00h<br /> <br />
<h4>DPTO DE SOPORTE</h4>
Lunes a Viernes  <br />
08:00 a 18:00h <br />
      </div>
      <div>
      <h3>Enlaces Utiles</h3><br />
<ul className="foot-links">
        <li>
          <NavLink to="/HomePage">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" >
            Términos y Condiciones
          </NavLink>
        </li>
      </ul>
      </div>
      <div>
      <h3>Contactenos</h3>
      <NavLink to="/aboutus" ><img className="ftr-img" src={fbftr} alt=""></img></NavLink>
      <NavLink to="/aboutus" ><img className="ftr-img" src={gglftr} alt=""></img></NavLink>
      </div>
    </div>
  );
};

export default Footer;
