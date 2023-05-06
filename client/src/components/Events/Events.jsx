import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllEventsSuccess } from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import EventMap from "../EventMap/EventMap";
import { getAllEvents } from "../../redux/eventSlice";

const Events = () => {
  const [selectedLocation, setSelectedLocation] = useState([0]); //Colocar el "location" de Eventos en el selectedLocation
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  const dispatch = useDispatch();
  const { allEvents } = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        {allEvents.map((item) => {
          return (
            <CardsEvents
              key={item.id}
              id_art={item.id}
              name_art={item.name}
              event={item}
              onClick={handleLocationChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
