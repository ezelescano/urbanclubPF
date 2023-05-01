import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-background">
        <div className="about-us-header">
          <h1>Sobre Nosotros</h1>
        </div>
        <div className="about-us-text">
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
        <div className="card-container">
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712069/photo-1419242902214-272b3f66ee7a_yjcuva.png"
                alt="Dua Lipa"
              />
            </div>
            <div className="card-content">
              <h2>Estiven</h2>
              <p>CEO & Fullstack Master</p>
              <br />
              <br />
              <a
                href="https://www.github.com/estiven2111"
                target="_blank"
                rel="noreferrer"
              >
                @estiven2111
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712168/photo-1490604001847-b712b0c2f967_flsfsy.png"
                alt="Harry Styles"
              />
            </div>
            <div className="card-content">
              <h2>Alan</h2>
              <p>
                Technology Operations Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                href="https://www.github.com/alanwinkler"
                target="_blank"
                rel="noreferrer"
              >
                @alanwinkler
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712168/photo-1485201543483-f06c8d2a8fb4_o7tcki.png"
                alt="Beyoncé"
              />
            </div>
            <div className="card-content">
              <h2>Miguel</h2>
              <p>CTO & Fullstack Master</p>
              <br />
              <br />
              <a
                href="https://github.com/XCODE89"
                target="_blank"
                rel="noreferrer"
              >
                @M.APONTE
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1459213599465-03ab6a4d5931_wo41ug.png"
                alt="Ed Sheeran"
              />
            </div>
            <div className="card-content">
              <h2>Eze</h2>
              <p>
                CIO <br />& Fullstack Master
              </p>
              <br />
              <a
                href="https://github.com/ezelescano"
                target="_blank"
                rel="noreferrer"
              >
                @ezelescano
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1534447677768-be436bb09401_rampxl.png"
                alt="Rihanna"
              />
            </div>
            <div className="card-content">
              <h2>Eudes</h2>
              <p>
                Software Quality Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                href="https://github.com/eudesmieres"
                target="_blank"
                rel="noreferrer"
              >
                @eudesmieres
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1518098268026-4e89f1a2cd8e_kifydl.png"
                alt="Justin Bieber"
              />
            </div>
            <div className="card-content">
              <h2>Pablo</h2>
              <p>
                Technology Infrastructure Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                href="https://github.com/ppalmav"
                target="_blank"
                rel="noreferrer"
              >
                @ppalmav
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1502786129293-79981df4e689_ivqjf8.png"
                alt="Adele"
              />
            </div>
            <div className="card-content">
              <h2>Alex</h2>
              <p>
                Director of Technology Innovation
                <br />& Fullstack Master
              </p>
              <a
                href="https://www.github.com/Alex-ty10"
                target="_blank"
                rel="noreferrer"
              >
                <br />
                @Alex-ty10
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img
                src="https://res.cloudinary.com/dipn8zmq3/image/upload/v1682602207/AcaVaLaURLdeLaFotoCargada_eqxmmm.png"
                alt="The Weeknd"
              />
            </div>
            <div className="card-content">
              <h2>Oscar</h2>
              <p>
                Technology Manager <br />& Fullstack Master
              </p>
              <br />
              <a
                href="https://www.github.com/AlhuayOscar"
                target="_blank"
                rel="noreferrer"
              >
                @AlhuayOscar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
