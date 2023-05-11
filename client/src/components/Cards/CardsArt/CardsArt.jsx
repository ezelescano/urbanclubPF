import React from "react";
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

  // ocupation.split(",").map((ocup) => {
  //   ocupationRows.push(
  //     <OcupationTag
  //       ocupation={ocup}
  //       key={id} />
  //   );

  // });

  return (
    <NavLink className={style.Link} to={`/profile/${id}`}>
      <div className={style.Container}>
        <img className={style.image} src={profilePhoto} alt={name} />
        <div className={style.text}>
          <h3>{name}</h3>
          <h5>Ocupación:</h5>
          <div>{ocupationRows}</div>
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
