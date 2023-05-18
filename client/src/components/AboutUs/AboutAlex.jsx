import React from "react";
import style from "./AboutEstiven.module.css";
function AboutAlex() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/alex.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            Soy<b> Alex </b>
            un desarrollador que está dando sus primeros pasos
            en el apasionante mundo del desarrollo de software.
            Me emociona embarcarme en esta carrera y adquirir
            conocimientos en diversas áreas de programación.
            Estoy abierto a aprender nuevas tecnologías y
            enfoques para resolver problemas de manera eficiente.
            Mi motivación y determinación me impulsan a superar
            desafíos y mejorar constantemente mis habilidades técnicas.

          </p>

        </div>
        <div className={style.links}>
          <a href="https://www.github.com/Alex-ty10" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-jaramillo-915b47260/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutAlex;
