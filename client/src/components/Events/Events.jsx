import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllEventsSuccess } from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import EventMap from "../EventMap/EventMap";
import { getAllEvents } from "../../redux/eventSlice";

const Events = () => {
  const {detailEvent} = useSelector(state=>state.events)
  const islogin = useSelector((state) => state.auth);
  const [selectedLocation, setSelectedLocation] = useState([0]); //Colocar el "location" de Eventos en el selectedLocation 
  console.log(islogin.user.id , detailEvent.id_Artist)
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  const dispatch = useDispatch();
  const {allEvents} = useSelector(state=>state.events)
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.containerHelp}>
        {
          allEvents.map((item,index)=>{
            let ban =1
          return(
            item.Events.map(event => {
              if (islogin.isAuthenticated && islogin.user.id !== event.id_Artist && ban === 1) {
            
                return(
            
                  <CardsEvents
                  key={item.id}
                  id_art = {item.id}
                  name_art = {item.name}
                  event={item}
                  onClick={handleLocationChange} />
                 )
               }
            })
          )
              
          
          })
        }
      </div>
    </div>
  );
};

export default Events;
