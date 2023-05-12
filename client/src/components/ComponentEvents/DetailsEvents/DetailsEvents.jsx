import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailEvents, deleteEvent } from "../../../redux/eventSlice";
import { useNavigate, useParams } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import style from "./DetailsEvents.module.css";
import UpdateEvents from "../../updateEvent/UpdateEvents";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Maps from "../../Maps/Maps";
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
  const [entradas, setEntradas] = useState(1);
  const [destino, setDestino] = useState({
    city: "",
    Country: "",
    ban: false,
  });

  useEffect(() => {
    const getEvent = async () => {
      const event = await dispatch(getDetailEvents(id));
      setEvent(event.payload);
      setCantidad(event.payload.stock);
    };
    getEvent();
  }, [dispatch, id]);

  const ubicationHandler = () => {
    if (
      destino.city === "" ||
      !destino.city ||
      destino.Country === "" ||
      !destino.Country
    ) {
      swal({
        title: "FALTA INFORMACION",
        text: "Debe llenar pais y ciudad correctamente",
        icon: "info",
        buttons: "Aceptar",
      });
      setDestino({
        ...destino,
        ban: false,
      });
    } else {
      setDestino({
        ...destino,
        ban: true,
      });
    }
  };
  const resetUbicationHandler = () => {
    setDestino({
      city: "",
      Country: "",
      ban: false,
    });
  };
  const getdestinohandler = (e) => {
    if (
      destino.city === "" ||
      !destino.city ||
      destino.Country === "" ||
      !destino.Country
    ) {
      setDestino({
        ...destino,
        ban: false,
      });
    }
    setDestino({
      ...destino,
      [e.target.name]: e.target.value,
    })
  };
  const buyTicketHandler = async () => {
    if (!islogin.isAuthenticated) {
      swal({
        title: "COMPRA INVÁLIDA",
        text: `Debes ingresar con tu usuario para hacer una compra`,
        icon: "info",
        buttons: {
          cancel: "Cancelar",
          confirm: "Iniciar sesión"
        },
      }).then((value) => {
        if (value) {
          navigate("/login");
        } else {
          return;
        }
      });
      return;
    }
    if (entradas < 0 || entradas === 0) {
      swal({
        title: "COMPRA INVÁLIDA",
        text: `La cantidad de entradas a comprar debe ser 1 o más`,
        icon: "error",
        buttons: "Aceptar",
      });
    } else {
      if (cantidad > 0) {
        const restCant = cantidad - entradas;
        setCantidad(restCant);
        let stockObjeto = { stock: restCant, id_Artist: islogin.user.id };
        setEntradas(1);
        console.log("cantidad", stockObjeto.stock);

        const eventd = await axios.put(
          `http://localhost:3001/events/buyTicket/${detailEvent.id}`,
          // `https://pruebaback-production-0050.up.railway.app/events/buyTicket/${detailEvent.id}`,

          
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
    }
  };

  const handleOnChange = (e) => {
    setEntradas(e.target.value);
  };

  return (
    <>
      <div className={style.backContainer}>
        <div className={style.container}>
          {/* Resto del código */}
          {islogin.user.id !== detailEvent.id_Artist ? (
            <div className={style.Description}>
              {/* Resto del código */}
              <label htmlFor="">¿Cual es tú país?</label>
              <input
                type="text"
                name="Country"
                value={destino.Country}
                onChange={getdestinohandler}
                className={style.roundedInput}
              />
              <label htmlFor="">¿Y tu ciudad?</label>
              <input
                type="text"
                name="city"
                value={destino.city}
                onChange={getdestinohandler}
                className={style.roundedInput}
              />
              {/* Resto del código */}
            </div>
          ) : islogin.isAuthenticated ? (
            <UpdateEvents id={id} event={detailEvent} />
          ) : (
            <div></div>
          )}
          {/* Resto del código */}
        </div>
      </div>
    </>
  );
}

export default DetailsEvents;
