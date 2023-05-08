import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CardsEvents.module.css";
import { useSelector } from "react-redux";

const CardsEvents = ({
            id_art ,
            name_art ,
            event ,
            handleDeleteEvent , 

}) => {

  const currentUser = useSelector((state) => state.auth.user);
  const isCurrentUser = currentUser && currentUser.id === id_art;
  
  return (
    <div className={style.container}  >
      <div className={style.card}  >
        <div className={style.imageContainer}  >
          <NavLink to={`/detailEvent/${event.id}`} >
            <img src={event.eventPhoto} alt={event.name} className={style.image} />
          </NavLink>
          <div className={style.overlay}  >
            <h2>{name_art}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            {
              isCurrentUser && <button onClick={ (e) => handleDeleteEvent(event.id, event.name) }>borrar</button>
            }
          </div>
        </div>
      </div>


    </div>
   
  );
};

export default CardsEvents;
