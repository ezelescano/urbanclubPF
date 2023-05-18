import React, { useEffect, useState } from "react";
import style from "./CardsArt.module.css";
import { NavLink } from "react-router-dom";
import OcupationTag from "./OcupationTag";
import axios from "axios";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const CardsArt = ({
  name,
  profilePhoto,
  ocupation,
  aboutMe,
  id,
  Events,
  Country,
  coverPhoto, // Nuevo atributo coverPhoto
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

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    setIsOverlayVisible(false);
  };
  console.log();
  return (
    <NavLink className={style.Link} to={`/profile/${id}`}>
      <div className={`${style.Container} ${style.overlayContainer}`}>
        <div className={style.images}>
          <img className={style.userCover} src={coverPhoto} alt={name} />
          <img className={style.userImage} src={profilePhoto} alt={name} />
        </div>
        <div className={`${style.text} ${style.overlay}`}>
          {/* <p>
            <AutoFixHighIcon />
            {"  "}
            {aboutMe}
          </p> */}
          <p>
            <PersonPinCircleIcon /> {"  "}
            {Country}
          </p>
          <h4>
            <Diversity1Icon />
            {"  "}
            {followers}
          </h4>
          <div className={`${style.fadeInText}`}>{ocupationRows}</div>
          <h3>{name}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default CardsArt;
