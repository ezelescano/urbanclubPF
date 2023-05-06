import React from "react";
import style from "./AboutEze.module.css";

function AboutEze() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/eze.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            <b>Soy Ezequiel </b>
            Durante 11 años trabajé en el sector de transporte público de
            pasajeros, pero sentía que necesitaba un cambio en mi vida. Decidí
            seguir mi pasión por la tecnología y convertirme en un Full Stack
            Developer. Ahora, tengo sólidos conocimientos en HTML, CSS, React,
            Redux, JavaScript, Sequelize, PostgreSQL, Express, y otras
            tecnologías, lo que me permite diseñar y desarrollar aplicaciones
            web de alta calidad. Estoy emocionado por seguir aprendiendo y
            mejorando mis habilidades para continuar creciendo como profesional
            en esta carrera que me apasiona.
          </p>
        </div>
        <div className={style.links}>
          <a href="https://github.com/ezelescano" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/eze-lescano83/" target="_blank">
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutEze;
