import React from "react";
import style from "./AboutEudes.module.css";
function AboutEudes() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="../../assets/eudes.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            <b>Soy Eudes Mieres </b>
            Una profesional proactiva, dinamica y apasionada, con gran experiencia en los negocios,
            finanzas y en la tecnologia. 
            
            
          </p>
          <p>
           Me destaco en liderazgo, desarrollo de productos y estrategia empresarial. 
            Comence a trabajar en roles de desarrollo de software, gerencia de proyectos y consultoría. 
            Lidero equipos de diseño, comercial y mas. Tengo una comunicacion habil, un aprendizaje rapido
            y un dinamismo amplio con ganas de crecer y aprender nuevas cosas.
          </p>
        </div>
        <div className={style.links}>
          <a href="https://www.github.com/eudesmieres" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/eudesmieres/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutEudes;
