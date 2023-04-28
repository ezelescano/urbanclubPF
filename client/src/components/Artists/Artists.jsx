import React from "react";
import style from "./Artists.module.css";
import Jenny from "../../imagenes/Jenny.jpg";
import Jorge from "../../imagenes/jorgeblass.jpg";
import Oscar from "../../imagenes/OscarNavarro.jpg";
import Dario from "../../imagenes/mago3.jpg";
import CardsArt from "../Cards/CardsArt/CardsArt";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAllArts } from "../../redux2/artistSlice";




const Artists = () => {

  const artistas= useSelector(state => state.artist.allUsuarios)

  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getAllArts());
  }, []);

  
return (
  <div>
    
    <div className={style.container}>
    {artistas.map((item) => (
      <div className={style.containerCar}>  
        <CardsArt
          key={item.id}
          id={item.id}
          name={item.name}
          profilePhoto={item.profilePhoto}
          ocupation={item.ocupation}
          aboutMe={item.aboutMe}
        />
       </div>
      ))}             
    </div>

    

  </div>
  )
}

export default Artists;