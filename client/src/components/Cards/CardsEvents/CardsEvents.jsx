import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./CardsEvents.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../../redux/eventSlice";
import swal from "sweetalert";

const CardsEvents = ({
  name_art,
  event,
  id_edit

}) => {
  const dispatch = useDispatch();
  const islogin = useSelector((state) => state.auth);
  const deleteEventHandler = (id,nameEvent,e) => {
    e.preventDefault()
    swal({
      title: "ELIMINAR EVENTO",
      text: `${name_art} Estas seguro de eliminar el evento ${nameEvent} `,
      icon: "warning",
      buttons: ["No", "Si"],
    })
      .then(async (res) => {
        if (res && islogin.user.id && islogin.isAuthenticated) {
           window.location.reload()
           dispatch(deleteEvent(id));
           
          //  console.log(confirmed)
          // if (true) {
          //   return swal({
          //     title: "CUENTA ELIMINADA",
          //     text: `El evento ${nameEvent} ha sido eliminado correctamente`,
          //     icon: "success",
          //     button: "Aceptar",
          //   });
          // }
        }
      })
    //   // .then((res) => {
    //   //   if (res) {
    //   //     window.location.reload();
    //   //   }
    //   // });

    // swal({
    //   title: "ELIMINAR CUENTA",
    //   text: `Estas seguro de eliminar la cuenta `,
    //   icon: "warning",
    //   buttons: ["No", "Si"],
    // })
    //   .then(async (res) => {
    //     if (res ) {
    //       console.log("first")
    //       const confirmed = dispatch(deleteEvent(id));
    //       console.log(confirmed)
    //       if (confirmed) {
    //         return swal({
    //           title: "CUENTA ELIMINADA",
    //           text: `La cuenta ha sido eliminada correctamente`,
    //           icon: "success",
    //           button: "Aceptar",
    //         });
    //       }
    //     }
    //   })
    //   .then((res) => {
    //     if (res) {
    //       window.location.replace("/");
    //       // navigate("/");
    //     }
    //   });
    
  }
  return (
    <div className={style.container}  >
      <div className={style.card}  >
        <div className={style.imageContainer}  >
          <NavLink to={`/detailEvent/${event.id}`} >
            <img src={event.eventPhoto} alt={event.name} className={style.image} />
          </NavLink>
          <div className={style.overlay}  >
            <h2>{name_art}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.stock}</p>
            {
              id_edit === islogin.user.id &&  islogin.user.id ? <form onSubmit={(e) => deleteEventHandler(event.id,event.name,e)}>
                <button>borrar</button>
              </form> : ""
            }
          </div>
        </div>
      </div>


    </div>
   
  );
};

export default CardsEvents;
