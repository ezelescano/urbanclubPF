import React from "react";
import style from "./AboutEstiven.module.css";
function AboutEstiven() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/estiven.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            <b>Soy Estiven Arboleda Martínez Colombiano </b>
            Soy un apasionado de la programación y los sistemas, y he estado
            estudiando de forma autodidacta durante los últimos 4 años.
            Actualmente, estoy cursando la carrera de Ingeniería de Sistemas en
            el Instituto Tecnológico Metropolitano de Medellín, en la cual ya he
            completado 6 semestres. Durante 12 años, trabajé como programador
            industrial en la fábrica RENAULT Sofasa de Colombia, adquiriendo
            habilidades y conocimientos valiosos en el campo de la tecnología.
          </p>
          <p>
            Recientemente, tomé la valiente decisión de renunciar a mi trabajo
            para seguir mis objetivos y metas personales, lo que me motiva a
            seguir aprendiendo y a convertirme en un mejor profesional cada día.
            Actualmente, estoy participando en el Botcamp de Henry en el área de
            sistemas para seguir expandiendo mi conocimiento y habilidades. Me
            siento muy emocionado por lo que el futuro me depara y estoy
            dispuesto a trabajar duro para alcanzar mis metas y ser un
            profesional exitoso.
          </p>
        </div>
        <div className={style.links}>
          <a href="https://github.com/estiven2111" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/estiven-arboleda-bb9aa61a4/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutEstiven;
