import React, { useEffect, useState } from "react";
import style from "./CardsArt.module.css";
import { NavLink } from "react-router-dom";
import OcupationTag from "./OcupationTag";
import axios from "axios";

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

      const [followers, setFollowers] = useState(0);


      const getFollowers = async () => {
        try {
          const response = await axios.get(`/artist/followers/${id}`);
          const data = response.data;
          //console.log("response.data", setFollowers);
          if (Array.isArray(data)) {
            setFollowers(data.length);
          } else {
            console.error("Invalid data structure:", data);
          }
        } catch (error) {
          console.error("Error fetching followers:", error);
        }
      };
      
      useEffect(() => {
        getFollowers();
      }, [id]);
      
//console.log("followers", followers);

  /* Overlay letra por letra: */
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const coverPhoto =
    "https://media.tenor.com/MfJ1SfYUNSIAAAAd/dancing-yandel.gif";
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
          <p>{Country}</p>
          <h5>Ubicacion:</h5>{/* COLOCAR ICONS */}
          <h4>Seguidores:{followers}</h4>{/* COLOCAR ICONS */}
          <div className={`${style.fadeInText}`}>{ocupationRows}</div>
          {/* <h5>Ocupación:</h5> */}
          <h3>{name}</h3>
          {/* <h5>Ubicacion:</h5> */}
          {/* <h4>{Country}</h4> */}
        </div>
      </div>
    </NavLink>
  );
};

export default CardsArt;
