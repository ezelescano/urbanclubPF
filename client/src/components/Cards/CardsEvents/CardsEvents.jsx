import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./CardsEvents.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../../redux/eventSlice";
import swal from "sweetalert";

const CardsEvents = ({ name_art, event, id_edit }) => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.auth);
  const deleteEventHandler = (id, nameEvent, e) => {
    e.preventDefault();
    swal({
      title: "ELIMINAR EVENTO",
      text: `${name_art} Estas seguro de eliminar el evento ${nameEvent} `,
      icon: "warning",
      buttons: ["No", "Si"],
    }).then(async (res) => {
      if (res && islogin.user.id && islogin.isAuthenticated) {
        window.location.reload();
        dispatch(deleteEvent(id));
      }
    });
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.imageContainer}>
          <NavLink to={`/detailEvent/${event.id}`}>
            <img
              src={event.eventPhoto}
              alt={event.name}
              className={style.image}
            />
            <div className={style.overlay}>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.location}</p>
              {id_edit === islogin.user.id && islogin.user.id ? (
                <form
                  onSubmit={(e) => deleteEventHandler(event.id, event.name, e)}
                >
                  <button>borrar</button>
                </form>
              ) : (
                ""
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardsEvents;
