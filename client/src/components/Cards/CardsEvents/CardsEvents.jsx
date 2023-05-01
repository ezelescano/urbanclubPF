import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./CardsEvents.module.css";

const CardsEvents = ({ events }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };

  return (
    <div className={style.container}>
      {events.map((event) => (
        <div className={style.card} key={event.id} onClick={handleClick}>
          <div className={style.imageContainer}>
            <img src={event.image} alt={event.name} className={style.image} />
            <div className={style.overlay}>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsEvents;
