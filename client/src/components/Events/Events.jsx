import React, { useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
// import { getAllEvents } from "../../redux/eventSlice";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import EventMap from "../EventMap/EventMap";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Evento 1",
      date: "29 de abril de 2023",
      location: "Ciudad A",
      description: "Descripción del evento 1",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1534447677768-be436bb09401_rampxl.png",
    },
    {
      id: 2,
      name: "Evento 2",
      date: "30 de abril de 2023",
      location: "Ciudad B",
      description: "Descripción del evento 2",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712168/photo-1490604001847-b712b0c2f967_flsfsy.png",
    },
    {
      id: 3,
      name: "Evento 3",
      date: "1 de mayo de 2023",
      location: "Ciudad C",
      description: "Descripción del evento 3",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1502786129293-79981df4e689_ivqjf8.png",
    },
    {
      id: 4,
      name: "Evento 4",
      date: "2 de mayo de 2023",
      location: "Ciudad D",
      description: "Descripción del evento 4",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1444080748397-f442aa95c3e5_lvphop.png",
    },
    {
      id: 5,
      name: "Evento 5",
      date: "3 de mayo de 2023",
      location: "Ciudad E",
      description: "Descripción del evento 5",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1518098268026-4e89f1a2cd8e_kifydl.png",
    },
    {
      id: 6,
      name: "Evento 6",
      date: "4 de mayo de 2023",
      location: "Ciudad F",
      description: "Descripción del evento 6",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712169/photo-1459213599465-03ab6a4d5931_wo41ug.png",
    },
    {
      id: 7,
      name: "Evento 7",
      date: "5 de mayo de 2023",
      location: "Ciudad G",
      description: "Descripción del evento 7",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712168/photo-1485201543483-f06c8d2a8fb4_o7tcki.png",
    },
    {
      id: 8,
      name: "Evento 8",
      date: "6 de mayo de 2023",
      location: "Ciudad H",
      description: "Descripción del evento 8",
      image:
        "https://res.cloudinary.com/dipn8zmq3/image/upload/v1682712069/photo-1419242902214-272b3f66ee7a_yjcuva.png",
    },
  ];
  const location = {
    lat: -34.586763,
    lng: -58.374534,
  };
  
  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        <CardsEvents events={events} />
      </div>
      <div>Algo</div>
      <div>
        <EventMap location={location} />
      </div>
    </div>
  );
};
/* Añadiremos valores más autenticos */
export default Events;
