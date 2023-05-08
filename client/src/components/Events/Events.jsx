import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllEventsSuccess } from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import { getAllEvents } from "../../redux/eventSlice";

const Events = () => {
  const { detailEvent } = useSelector((state) => state.events);
  const islogin = useSelector((state) => state.auth);
  const [selectedLocation, setSelectedLocation] = useState([0]); //Colocar el "location" de Eventos en el selectedLocation

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  const dispatch = useDispatch();
  const { allEvents } = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  const location = {
    locationName: "Calle C 16 Barrio La campiña 6 N.356",
  };

  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        {allEvents.map((item, index) => {
          return item.Events.map((event, index) => {
            if (islogin.isAuthenticated) {
              if (islogin.user.id !== event.id_Artist) {
                return (
                  <CardsEvents
                    key={index}
                    id_art={item.id}
                    name_art={item.name}
                    event={event}
                    onClick={handleLocationChange}
                  />
                );
              }
            } else {
              return (
                <CardsEvents
                  key={index}
                  id_art={item.id}
                  name_art={item.name}
                  event={event}
                  onClick={handleLocationChange}
                />
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default Events;
