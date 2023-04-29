import React from "react";
import style from "./CardsEvents.module.css";

const CardsEvents = ({ events }) => {
  return (
    <div className={style.container}>
      {events.map((event) => (
        <div className={style.card} key={event.id}>
          <img src={event.image} alt={event.name} className={style.image} />
          <div className={style.content}>
            <h2>{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsEvents;
