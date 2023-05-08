import React from "react";
import style from "./AboutOscar.module.css";

function AboutOscar() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/oscar.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>Oscar Carlos Alhuay Ramirez :{")"}</h2>
        <div className={style.paragraph}>
          <p>
            <b> ¡Bueeenas! Soy Oscar </b>
            un apasionado de la tecnología, la programación y la electrónica en
            general. <br />
            <br />
            Con tan solo 21 años, ya he trabajado en empresas como Tenaris,
            Techint y Toyota, principalmente en puestos de operario. Sin
            embargo, siempre he mantenido una constante curiosidad por
            tecnologías como Raspberry Pi, Linux, C#, Lua, React, Postgres,
            Swift, Java, Arduino y Mongo. <br />
            <br />
            Mi interés por la tecnología comenzó desde joven, cuando descubrí la
            magia detrás de la electrónica y cómo podía ser utilizada para crear
            cosas asombrosas. Desde entonces, he estado explorando y aprendiendo
            todo lo que puedo sobre esta fascinante área.
            <p>
              Estoy muy emocionado por las oportunidades futuras que esta
              industria me brindará, y espero seguir creciendo y aprendiendo
              para poder contribuir al mundo de la tecnología de manera
              significativa.
            </p>
            <b> Desde ya, Saludos!</b>
            <br />
            <br />
          </p>
        </div>
        <div className={style.links}>
          <a href="https://github.com/AlhuayOscar" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutOscar;
