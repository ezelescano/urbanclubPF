import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllEventsSuccess } from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import style from "./Events.module.css";
import CardsEvents from "../Cards/CardsEvents/CardsEvents";
import {
  FilterEvents,
  getAllEvents,
  getAllLocations,
  getFilterEventsSuccess,
} from "../../redux/eventSlice";

const Events = ({ showFilters }) => {
  const { detailEvent } = useSelector((state) => state.events);
  const islogin = useSelector((state) => state.auth);
  const locations = useSelector((state) => state.events.locations);
  //console.log("locationssssss", locations);

  const events = useSelector((state) => state.events.allEvents); //state.events.
  //console.log("EVEnnnttssss", events);

  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState([0]); //Colocar el "location" de Eventos en el selectedLocation
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getAllLocations());
  }, [dispatch]);

  const location = {
    locationName: "Calle C 16 Barrio La campiña 6 N.356",
  };

  useEffect(() => {
    // dispatch (pagNum(1));
    // dispatch(FilterArtists(selectedCategory));
    handlesFilterEvents();
  }, [date, price, ubicacion]);

  const handlesFilterEvents = () => {
    let Eventos = [...events];
    dispatch(FilterEvents(date, price, ubicacion));

    if (date !== "" || price !== "" || ubicacion !== "") {
      // setIsLoading(true);
      // setIsLoading(false);

      // Add selected filters to the state
      const newFilters = [];
      if (date !== "") newFilters.push(date);
      if (price !== "") newFilters.push(price);
      if (ubicacion !== "") newFilters.push(ubicacion);
      setSelectedFilters(newFilters);
    } else {
      // setIsLoading(true);
      dispatch(getAllEvents(Eventos));
      // setIsLoading(false);

      // Clear selected filters
      setSelectedFilters([]);
    }
  };
  const handleRemoveFilter = (filter) => {
    const newFilters = selectedFilters.filter((f) => f !== filter);
    setSelectedFilters(newFilters);

    // Remove filter from the form
    if (date === filter) setDate("");
    if (price === filter) setPrice("");
    if (ubicacion === filter) setUbicacion("");
  };

  return (
    <div className={style.container}>
      {
        showFilters ? (
          <div className={style.eventsFilters}>
            <form className={style.eventsFilters}>
              <select value={date} onChange={(e) => setDate(e.target.value)}>
                <option hidden value="">
                  Fechas
                </option>
                <option value="Hoy">Hoy</option>
                <option value="Esta semana">Esta semana</option>
                <option value="Este mes">Este mes</option>
                <option value="Proximos">Proximamente</option>
              </select>

              <select
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              >
                <option value="">Precios</option>
                <option value="0">Gratis</option>
                <option value="1-50">Rango medio</option>
                <option value="51-100">Rango alto</option>
                <option value="101 a mas">Rango maximo</option>
              </select>

              <select
                value={ubicacion}
                onChange={(event) => setUbicacion(event.target.value)}
              >
                <option value="">Todos los países</option>

                {locations?.map((Country) => (
                  <option key={Country} value={Country}>
                    {Country}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => (setDate(""), setPrice(""), setUbicacion(""))}
              >
                Limpiar
              </button>
            </form>
          </div>
        ) : null
      }


      <div className={style.containerHelp}>
        {events?.map((item, index) => {
          if (islogin.isAuthenticated) {
            if (islogin.user.id !== item.id_Artist) {
              return (
                <CardsEvents
                  key={index}
                  id_art={item.id}
                  name_art={item.name}
                  event={item}
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
                event={item}
                onClick={handleLocationChange}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Events;
