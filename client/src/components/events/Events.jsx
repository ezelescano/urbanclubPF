import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getAllEvents } from "../../redux/eventSlice";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";

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
    // Agrega más eventos aquí
  ];

  //const events = useSelector((state) => state.event.allEvents);
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllEvents());
  // }, [dispatch]);

  return (
    <div className={style.container}>
      <CardsEvents events={events} />
    </div>
  );
};

export default Events;
