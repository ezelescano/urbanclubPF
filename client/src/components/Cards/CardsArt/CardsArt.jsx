import React from "react";
import style from "./CardsArt.module.css";
import { NavLink } from "react-router-dom";

const CardsArt = ({ name, profilePhoto, ocupation, aboutMe, id, Events }) => {
  return (
    <NavLink className={style.Link} to={`/profile/${id}`}>
      <div className={style.Container}>
        <img className={style.image} src={profilePhoto} alt={name} />
        <div className={style.text}>
          <h3>{name}</h3>
          <h5>Occupation:</h5>
          <p>{ocupation}</p>
          <h5>About me:</h5>
          <p>{aboutMe}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default CardsArt;
