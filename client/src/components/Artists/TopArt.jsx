import React from "react";
import style from "./TopArt.module.css";
import { NavLink } from "react-router-dom";

const TopArt = ({ name, profilePhoto, id }) => {
  return (
    <NavLink to={`/profile/${id}`}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img className={style.foto} src={profilePhoto} alt={name} />
          <div className={style.text}>{name}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default TopArt;
