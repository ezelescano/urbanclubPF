import React from "react";
import style from "./AboutEstiven.module.css";
function AboutMiguel() {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/assets/miguel.jpeg" alt="" />
      </div>
      <div className={style.description}>
        <h2>DESCRIPCION</h2>
        <br />
        <br />
        <div className={style.paragraph}>
          <p>
            <b>¡Hola! soy Dante Miguel Aponte Hernandez </b>
            un apasionado de la tecnología que está comenzando
            su viaje en el mundo de la programación.
            Con una sólida experiencia profesional en otros ámbitos,
            he adquirido habilidades transferibles que me permiten
            adaptarme y destacarme en cualquier trabajo.
            Sin embargo, la programación es una pasión que no había
            tenido la oportunidad de desarrollar hasta ahora, y estoy
            emocionado de sumergirme en este increíble mundo.
            Estoy listo para enfrentar nuevos desafíos, aprender
            de los expertos y contribuir con mi entusiasmo y conocimientos
            en el apasionante campo de la tecnología.
          </p>

        </div>
        <div className={style.links}>
          <a href="https://github.com/XCODE89" target="_blank">
            <img src="/assets/Links/github.ico" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/dante-aponte-hernandez-3b61b826b/"
            target="_blank"
          >
            <img src="/assets/Links/linkedin.ico" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMiguel;
