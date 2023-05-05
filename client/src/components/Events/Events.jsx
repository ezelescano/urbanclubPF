import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllEventsSuccess } from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import EventMap from "../EventMap/EventMap";

const Events = () => {
  const [selectedLocation, setSelectedLocation] = useState([0]); //Colocar el "location" de Eventos en el selectedLocation 
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllEvents());
  // }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        <CardsEvents onClick={handleLocationChange} />
      </div>
      <div>Algo</div>
      <div>
        <p style={{ backgroundColor: "white" }}>
          EventMap location={selectedLocation}
        </p>
        <EventMap location={selectedLocation} />
      </div>
    </div>
  );
};

export default Events;
