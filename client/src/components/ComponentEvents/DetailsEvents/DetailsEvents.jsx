import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailEvents, deleteEvent } from "../../../redux/eventSlice";
import { useNavigate, useParams } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import style from "./DetailsEvents.module.css";
import UpdateEvents from "../../updateEvent/UpdateEvents";
import axios from "axios";
import swal from "sweetalert";

function DetailsEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { detailEvent } = useSelector((state) => state.events);
  const islogin = useSelector((state) => state.auth);

  const [event, setEvent] = useState({});

  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    const getEvent = async () => {
      const event = await dispatch(getDetailEvents(id));
      setEvent(event.payload);
      setCantidad(event.payload.stock);
    };
    getEvent();
  }, [dispatch, id]);
  
  const buyTicketHandler = () => {
    if (cantidad > 0) {
      let restCant = cantidad - 1;

      setCantidad(restCant);
      let stockObjeto = { stock: restCant };
      axios.put(
        `http://localhost:3001/events/buyTicket/${detailEvent.id}`,
        stockObjeto
      );
      swal({
        title: "COMPRA EXITOSA",
        text: `Revisa tu correo para ver más detalles de la compra`,
        icon: "success",
        buttons: "Aceptar",
      });
    } else {
      swal({
        title: "ENTRADAS AGOTADAS",
        text: `No hay más entradas disponibles para este evento`,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.img_Es}>
        <img src={detailEvent.eventPhoto} alt="" />
      </div>

      {islogin.user.id !== detailEvent.id_Artist ? (
        <div className={style.Description}>
          <h1>DETALLE</h1>
          <h2>{detailEvent.name}</h2>
          <h2>NOMBRE DEL LUGAR</h2>
          <h3>{detailEvent.nameArena}</h3>

          <h2>DIRECCION</h2>
          <h3>{detailEvent.location}</h3>
          <h2>FECHA</h2>
          <h3>{detailEvent.date}</h3>
          <h2>PRECIO</h2>
          <h3> U$S {detailEvent.price}</h3>
          <h2>CANTIDAD DE ENTRADAS DISPONIBLES</h2>
          <h3>{cantidad}</h3>
          {/* <p>{detailEvent.Description}</p> //!necesitamos una descripcion  */}
          <div className={style.links}>
            Comprar Entrada con Debito o Crédito:
            <button onClick={buyTicketHandler}>Comprar entrada</button>
            <a href="https://www.visa.com.ar" target="_blank" rel="noreferrer">
              <CreditCardIcon />
            </a>
            <br />
            Buscar la ticketeria más cercana
            <a
              href="https://www.google.com/maps/place/Teatro+Gran+Rex/@-34.6033873,-58.5313019,12z/data=!4m10!1m2!2m1!1sGran+Rex!3m6!1s0x95bccaceed5746b9:0xf933ab84305babc0!8m2!3d-34.6033873!4d-58.3788666!15sCghHcmFuIFJleJIBF3BlcmZvcm1pbmdfYXJ0c190aGVhdGVy4AEA!16s%2Fm%2F05bzpqm"
              target="_blank"
              rel="noreferrer"
            >
              <StoreMallDirectoryIcon />
            </a>
          </div>
        </div>
      ) : islogin.isAuthenticated ? (
        <UpdateEvents id={islogin.user.id} event={event} />
      ) : (
        // <div className={style.Description}>
        // <h1>EDITAR</h1>
        //   <h2>{detailEvent.name}</h2>
        //   <h2>NOMBRE DEL LUGAR</h2>
        //   <h3>{detailEvent.nameArena}</h3>
        //   <h3>{detailEvent.id}</h3>
        //   <h2>DIRECCION</h2>
        //   <h3>{detailEvent.location}</h3>
        //   <h2>PRECIO</h2>
        //   <h3>{detailEvent.price}</h3>

        //   {/* <p>{detailEvent.Description}</p> //!necesitamos una descripcion  */}

        //   <div className='links'>
        //               <a href="https://github.com/estiven2111" target='_blank'>
        //                   <img src="/assets/Links/github.ico" alt="" />
        //               </a>
        //               <a href="https://www.linkedin.com/in/estiven-arboleda-bb9aa61a4/" target='_blank'>
        //                   <img src="/assets/Links/linkedin.ico" alt="" />
        //               </a>

        //           </div>
        // </div>
        <div></div>
      )}
    </div>
  );
}

export default DetailsEvents;
