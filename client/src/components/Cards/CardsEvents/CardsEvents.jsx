import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./CardsEvents.module.css";

const CardsEvents = ({
  eventPhoto,
  name,
  price,
  location,
  nameArena,
  date,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };
  return (
    <div className={style.container}>
      <div className={style.card} key={1} onClick={handleClick}>
        <div className={style.imageContainer}>
          <img src={eventPhoto} alt={name} className={style.image} />
          <div className={style.overlay}>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{location}</p>
            <p>{nameArena}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEvents;
