import React from "react";
import style from "./Artists.module.css";
import Jenny from "../../imagenes/Jenny.jpg";
import Jorge from "../../imagenes/jorgeblass.jpg";
import Oscar from "../../imagenes/OscarNavarro.jpg";
import Dario from "../../imagenes/mago3.jpg";
import CardsArt from "../Cards/CardsArt/CardsArt";




const Artists = () => {
  const artistas = [
    { name: "Jennifer Lopez",
    profilePhoto: Jenny,
    ocupation: "Solista",
    aboutMe: "Soy la Reina del pop"},
    { name: "Oscar Navarro",
    profilePhoto: Oscar,
    ocupation: "Pintor",
    aboutMe: "Me gusta pintar paisajes"},
    { name: "Jorge Blass",
    profilePhoto: Jorge,
    ocupation: "Ilusionista",
    aboutMe: "Con apenas 19 años ganó la Varita de Oro de Monte Carlos..."},
    { name: "Dario Black",
    profilePhoto: Dario,
    ocupation: "Ilusionista",
    aboutMe: "Despierta dormido y duerme despierto..."},
    { name: "Jorge Blass",
    profilePhoto: Jorge,
    ocupation: "Ilusionista",
    aboutMe: "Con apenas 19 años ganó la Varita de Oro de Monte Carlos..."},
    { name: "Jennifer Lopez",
    profilePhoto: Jenny,
    ocupation: "Solista",
    aboutMe: "Soy la Reina del pop"},
    { name: "Oscar Navarro",
    profilePhoto: Oscar,
    ocupation: "Pintor",
    aboutMe: "Me gusta pintar paisajes"},
    { name: "Jorge Blass",
    profilePhoto: Jorge,
    ocupation: "Ilusionista",
    aboutMe: "Con apenas 19 años ganó la Varita de Oro de Monte Carlos..."},
    { name: "Dario Black",
    profilePhoto: Dario,
    ocupation: "Ilusionista",
    aboutMe: "Despierta dormido y duerme despierto..."},
    { name: "Jennifer Lopez",
    profilePhoto: Jenny,
    ocupation: "Solista",
    aboutMe: "Soy la Reina del pop"},
    
  ];

  

  return (
  <div>
    
    <div className={style.container}>
    {artistas.map((artista, index) => (
      <div className={style.containerCar}>  
        <CardsArt
          key={index}
          name={artista.name}
          profilePhoto={artista.profilePhoto}
          ocupation={artista.ocupation}
          aboutMe={artista.aboutMe}
        />
       </div>
      ))}             
    </div>

    

  </div>
  )
}

export default Artists;