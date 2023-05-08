import React from "react";
import style from "./AboutUs.module.css";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function AboutUs() {
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.aboutUsBackground}>
        <div className={style.aboutUsHeader}>
          <h1>Sobre Nosotros</h1>
        </div>
        <div className={style.aboutUsText}>
          <h2>
            ¡Bienvenido a nuestra página de UrbanClub! Aquí en nuestra
            plataforma, conectamos a artistas de todo tipo con aquellos que
            buscan su creatividad y talento. Creemos que el arte es una forma
            poderosa de expresión, y nuestro objetivo es ayudar a que cada
            artista encuentre su lugar en el mundo. Nuestra página de UrbanClub
            no se trata solo de conectar a músicos y bandas. También nos
            enfocamos en una amplia variedad de disciplinas artísticas,
            incluyendo pintura, escultura, fotografía, diseño gráfico y más.
          </h2>
          <br />
        </div>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.cardImage}>
              <NavLink to="/About/Estiven">
                <img src="../../assets/Estiven.jpeg" alt="Dua Lipa" />
              </NavLink>
            </div>
            <div className={style.cardContent}>
              <h2>Estiven</h2>
              <img src="../../assets/colombia.ico" alt="" />
              <h4>Colombia</h4>
              <p>CEO & Fullstack Master</p>
              <br />
              <br />
              <a
                className={style.git}
                href="https://www.github.com/estiven2111"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <a href="">
                <img src="../../assets/alan.jpeg" alt="Dua Lipa" />
              </a>
            </div>
            <div className={style.cardContent}>
              <h2>Alan</h2>
              <img src="../../assets/argentina.ico" alt="" />
              <h4>Argentina</h4>
              <p>
                Technology Operations Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                className={style.git}
                href="https://www.github.com/Alanwinkler"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <a href="">
                <img src="../../assets/miguel.jpeg" alt="Dua Lipa" />
              </a>
            </div>
            <div className={style.cardContent}>
              <h2>Miguel</h2>
              <img src="../../assets/peru.ico" alt="" />
              <h4>Peru</h4>
              <p>CTO & Fullstack Master</p>
              <br />
              <br />
              <a
                className={style.git}
                href="https://www.github.com/XCODE89"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <NavLink to="/About/Eze">
                <img src="../../assets/eze.jpeg" alt="Dua Lipa" />
              </NavLink>
            </div>
            <div className={style.cardContent}>
              <h2>Eze</h2>
              <img src="../../assets/argentina.ico" alt="" />
              <h4>Argentina</h4>
              <p>
                CIO <br />& Fullstack Master
              </p>
              <br />
              <a
                className={style.git}
                href="https://www.github.com/ezelescano"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <a href="">
                <img src="../../assets/eudes.jpeg" alt="Dua Lipa" />
              </a>
            </div>
            <div className={style.cardContent}>
              <h2>Eudes</h2>
              <img src="../../assets/colombia.ico" alt="" />
              <h4>Colombia</h4>
              <p>
                Software Quality Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                className={style.git}
                href="https://www.github.com/eudesmieres"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <a href="">
                <img src="../../assets/pablo.jpeg" alt="Justin Bieber" />
              </a>
            </div>
            <div className={style.cardContent}>
              <h2>Pablo</h2>
              <img src="../../assets/chile.ico" alt="" />
              <h4>Chile</h4>
              <p>
                Technology Infrastructure Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                className={style.git}
                href="https://www.github.com/ppalmav"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <a href="">
                <img src="../../assets/alex.jpeg" alt="Dua Lipa" />
              </a>
            </div>
            <div className={style.cardContent}>
              <h2>Alex</h2>
              <img src="../../assets/colombia.ico" alt="" />
              <h4>Colombia</h4>
              <p>
                Director of Technology Innovation
                <br />& Fullstack Master
              </p>
              <a
                className={style.git}
                href="https://www.github.com/Alex-ty10"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardImage}>
              <a href="">
                <NavLink to="/About/Oscar">
                  <img src="../../assets/oscar.jpeg" alt="Dua Lipa" />
                </NavLink>
              </a>
            </div>
            <div className={style.cardContent}>
              <h2>Oscar</h2>
              <img src="../../assets/argentina.ico" alt="" />
              <h4>Argentina</h4>
              <p>
                Technology Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                className={style.git}
                href="https://www.github.com/AlhuayOscar"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                className={style.link}
                href="https://www.linkedin.com/in/oscar-carlos-alhuay-ramirez-3a5b73196/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
