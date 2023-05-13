import React, { useState } from "react";
import style from "./CardsArt.module.css";
import { NavLink } from "react-router-dom";
import OcupationTag from "./OcupationTag";

const CardsArt = ({
  name,
  profilePhoto,
  ocupation,
  aboutMe,
  id,
  Events,
  Country,
}) => {
  const ocupationRows =
    ocupation &&
    ocupation
      .split(",")
      .map((ocupation) => (
        <OcupationTag ocupation={ocupation} key={ocupation + id} />
      ));
  /* Overlay letra por letra: */
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const coverPhoto =
    "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80";
  const handleMouseEnter = () => {
    setIsOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    setIsOverlayVisible(false);
  };
  return (
    <NavLink className={style.Link} to={`/profile/${id}`}>
      <div className={`${style.Container} ${style.overlayContainer}`}>
        <div className={style.images}>
          <img className={style.userCover} src={coverPhoto} alt={name} />
          <img className={style.userImage} src={profilePhoto} alt={name} />
        </div>
        <div className={`${style.text} ${style.overlay}`}>
          <h3>{name}</h3>
          <h5>Ocupación:</h5>
          <div className={`${style.fadeInText}`}>{ocupationRows}</div>
          {/* <h5>Sobre mí:</h5>
          <p>{aboutMe}</p> */}
          {/* <h5>Ubicacion:</h5> */}
          <h4>{Country}</h4>
        </div>
      </div>
    </NavLink>
  );
};

export default CardsArt;
