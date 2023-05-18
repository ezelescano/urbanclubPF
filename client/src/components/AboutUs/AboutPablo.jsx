import React from "react";
import style from "./AboutEstiven.module.css";
function AboutPablo() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/pablo.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            <b>Soy Pablo Esteban Palma Valenzuela </b>
            un desarrollador web entusiasta y altamente capacitado.
            Recientemente he completado con éxito un bootcamp
            de desarrollo web, donde adquirí conocimientos sólidos
            en lenguajes de programación como HTML, CSS y JavaScript,
            así como experiencia práctica en frameworks populares
            como React y Node.js. Mi pasión por la tecnología y
            mi dedicación al aprendizaje continuo me han permitido
            convertirme en un profesional competente en el campo
            del desarrollo web. Estoy emocionado de poner en práctica
            mis habilidades, colaborar con equipos talentosos y enfrentar
            nuevos desafíos en el mundo laboral. ¡Estoy listo para hacer
            una diferencia en el desarrollo web!
          </p>

        </div>
        <div className={style.links}>
          <a href="https://www.github.com/ppalmav" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-pv/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPablo;
