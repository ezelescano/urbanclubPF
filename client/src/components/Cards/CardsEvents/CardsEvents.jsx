import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CardsEvents.module.css";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

const CardsEvents = ({ id_art, name_art, event, handleDeleteEvent }) => {
  const currentUser = useSelector((state) => state.auth.user);
  const isCurrentUser = currentUser && currentUser.id === id_art;

  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        <div className={style.card}>
          <div className={style.imageContainer}>
            <div className={style.imageWrapper}>
              <NavLink to={`/detailEvent/${event.id}`}>
                <img
                  src={event.eventPhoto}
                  alt={event.name}
                  className={style.image}
                />
              </NavLink>
              {isCurrentUser && (
                <button
                  className={style.closeButton}
                  onClick={(e) => handleDeleteEvent(event.id, event.name)}
                >
                  <DeleteIcon />
                </button>
              )}
            </div>
            <div className={style.overlay}>
              <h2>
                {event.name} <TheaterComedyIcon />
              </h2>
              <p>
                <CalendarMonthIcon /> {event.date}
              </p>
              <p>
                <PlaceIcon />
                {event.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEvents;
