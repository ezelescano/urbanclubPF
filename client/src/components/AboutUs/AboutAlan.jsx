import React from "react";
import style from "./AboutEstiven.module.css";
function AboutAlan() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/alan.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            <b>Soy Alan Quimey Winkler </b>
            un desarrollador de software junior con una gran
            pasión por aprender y crecer en esta industria.
            Estoy entusiasmado por formar parte de proyectos
            desafiantes y adquirir nuevas habilidades.
            Mi enfoque está en ampliar mis conocimientos técnicos,
            explorar nuevas tecnologías y resolver problemas de
            manera efectiva. Valorando el trabajo en equipo y
            la comunicación abierta, estoy listo para enfrentar
            desafíos con determinación y perseverancia.
            Mi objetivo es seguir aprendiendo de profesionales
            experimentados y contribuir al éxito de los proyectos
            con mi dedicación y entusiasmo incansables.
          </p>

        </div>
        <div className={style.links}>
          <a href="https://github.com/Alanwinkler" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/alan-winkler-65a44a268/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutAlan;
