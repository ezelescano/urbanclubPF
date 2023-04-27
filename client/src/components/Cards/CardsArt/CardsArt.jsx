import React from 'react';
import style from "./CardsArt.module.css";

const CardsArt = ({ name, profilePhoto, ocupation, aboutMe }) => {
  return (
    <div className={style.Container}>
            
            <img className={style.image} src={profilePhoto} alt={name} />
            <div className={style.text}>
            <h3>{name}</h3>
            <h5>Occupation:</h5>
             <p>{ocupation}</p>
             <h5>About me:</h5>
             <p> {aboutMe}</p> 
             </div>            
    </div>
  )
}

export default CardsArt;