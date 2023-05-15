import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./CardsEvents.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const EmptyCard = ({id}) => {
  const usuario = useSelector((state) => state.artist.usuario);
  const currentUser = useSelector((state) => state.auth);
  const isCurrentUser = currentUser.user && currentUser.user.id === usuario.id;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={style.container}>
      {isCurrentUser && (
        <div className={style.containerHelp}>
          <div className={style.card}>
            <div className={style.imageContainer}>
              <div className={style.imageWrapper}>
                <div className={style.emptyText}>
                  <NavLink to={`/createevent/${id}`} onClick={scrollToTop}>
                    <LibraryAddIcon />
                  </NavLink>
                </div>
              </div>
              <div className={style.overlay}>
                <h2>
                  <TheaterComedyIcon /> Crea tu evento!
                </h2>
                <p>
                  <CalendarMonthIcon /> La fecha de cometido
                </p>
                <p>
                  <PlaceIcon />
                  Acá Lugar del evento
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmptyCard;
