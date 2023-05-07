import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./CardsEvents.module.css";

const CardsEvents = ({
  id_art,
  name_art,
  event,
  inde
}) => {
  const navigate = useNavigate();

  return (
    <div className={style.container}  >
     {event.Events.map((event,index) =>{
       return(
      <div className={style.card} key={index} >
      <div className={style.imageContainer}  >
        <NavLink to={`/detailEvent/${event.id}`} >
        <img src={event.eventPhoto}   alt={event.name} className={style.image} />
        </NavLink>
        <div className={style.overlay}  >
          <h2>{name_art}</h2>
          <p>{event.date}</p>
             <p>{event.location}</p>
             <p>{event.description}</p>
        </div>
      </div>
    </div>
    )
     })}
    </div>
   
  );
};

export default CardsEvents;
