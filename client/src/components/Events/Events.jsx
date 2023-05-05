import React, { useState } from "react";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import EventMap from "../EventMap/EventMap";

const Events = () => {
  
  const events = [
    {
      id: 1,
      name: "Evento 1",
      date: "29 de abril de 2023",
      location: "Tropitango",
      description: "Descripción del evento 1",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1534447677768-be436bb09401_rampxl.png",
    },
    {
      id: 2,
      name: "Evento 2",
      date: "30 de abril de 2023",
      location: "Retiro",
      description: "Descripción del evento 2",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712168/photo-1490604001847-b712b0c2f967_flsfsy.png",
    },
    {
      id: 3,
      name: "Evento 3",
      date: "1 de mayo de 2023",
      location: "Zarate",
      description: "Descripción del evento 3",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1502786129293-79981df4e689_ivqjf8.png",
    },
  ];
const [selectedLocation, setSelectedLocation] = useState(events[0].location);
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        <CardsEvents events={events} onClick={handleLocationChange} />
      </div>
      <div>Algo</div>
      <div>
        <EventMap location={selectedLocation} />
        <p>EventMap location={selectedLocation}</p>
      </div>
    </div>
  );
};

export default Events;
