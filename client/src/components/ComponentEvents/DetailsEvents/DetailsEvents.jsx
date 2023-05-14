import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailEvents, deleteEvent, buyEvent, buyTicket } from "../../../redux/eventSlice";
import { useNavigate, useParams } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import style from "./DetailsEvents.module.css";
import UpdateEvents from "../../updateEvent/UpdateEvents";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Maps from "../../Maps/Maps";
import axios from "axios";
import swal from "sweetalert";
import Comments from "../../Comments/Comments";

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
  console.log(event);
  console.log(islogin);

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
    });
  };
  const buyTicketHandler = async ({ onvalue }) => {

    if (!islogin.isAuthenticated) {
      swal({
        title: "COMPRA INVÁLIDA",
        text: `Debes ingresar con tu usuario para hacer una compra`,
        icon: "info",
        buttons: {
          cancel: "Cancelar",
          confirm: "Iniciar sesión",
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
        let stockObjeto = {
          stock: restCant,
          id_Artist: islogin.user.id,
          totalPayment: entradas * event.price,
        };
        let compraticket = { value: (entradas * event.price), brand_name: detailEvent.name }
        setEntradas(1);

        const buy = await dispatch(buyTicket(compraticket));
        let timer = null;
        console.log(buy);
        const urlPay = buy.link

        // const googleLoginURL = "https://pruebaback-production-0050.up.railway.app/artist/auth/google"
        const newWindow = window.open(urlPay, "_blank", "width=550,height=550")
        console.log(newWindow);
        let eventd
        eventd = await axios.put(
          `/events/buyTicket/${detailEvent.id}`,
          // `https://pruebaback-production-0050.up.railway.app/events/buyTicket/${detailEvent.id}`,
          stockObjeto
        );




        if (newWindow) {
          timer = setInterval(async () => {
            if (newWindow.closed) {
              if (timer) clearInterval(timer)
              console.log("prueba");
              if (eventd) {
                swal({
                  title: "COMPRA EXITOSA",
                  text: `Revisa tu correo para ver más detalles de la compra`,
                  icon: "success",
                  buttons: "Aceptar",
                });
              } else {
                swal({
                  title: "COMPRA EXITOSA",
                  text: `tuvimos problemas enviando el email a tu correo consulta con urbanclub!!!`,
                  icon: "info",
                  buttons: "Aceptar",
                });
              }


            }
          }, 500)

        }



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
          <br></br>
          <div className={style.img_Es}>
            <img src={detailEvent.eventPhoto} alt="" />
          </div>
          {islogin.user.id !== detailEvent.id_Artist ? (
            <div className={style.Description}>
              <h1>{detailEvent.name}</h1>
              <br />
              <h5>{detailEvent.nameArena}</h5>
              <h5>{detailEvent.location}</h5>
              <h5>
                <CalendarMonthIcon style={{ fontSize: "12px" }} />{" "}
                {detailEvent.date}
              </h5>
              <h4>PRECIO</h4>
              <h5> U$S {detailEvent.price}</h5>
              <h4>Descripcion</h4>
              <p>{detailEvent.Description}</p>
              <br />
              <label htmlFor="">¿Cual es tú país?</label>
              <input
                type="text"
                name="Country"
                value={destino.Country}
                onChange={getdestinohandler}
              />
              <label htmlFor="">¿Y tu ciudad?</label>
              <input
                type="text"
                name="city"
                value={destino.city}
                onChange={getdestinohandler}
              />
              <button disabled={destino.ban} onClick={ubicationHandler}>
                Cómo llego ahi?
              </button>
              <button disabled={!destino.ban} onClick={resetUbicationHandler}>
                Reinicar la Busqueda
              </button>
              <div className={style.links}>
                <br />
                <h3>Cantidad de entradas Disponibles</h3>
                <h3>{cantidad}</h3>
                <div>
                  <label>Comprar Entradas con Debito o Crédito:</label>
                  <br />
                  <input
                    name="entradas"
                    value={entradas}
                    min="1"
                    type="number"
                    onChange={handleOnChange}
                  />
                </div>
                <button onClick={buyTicketHandler}>
                  Comprar entrada <CreditCardIcon />
                </button>
                <p>Total a pagar: {entradas * event.price} USD</p>
                <a
                  href="https://www.visa.com.ar"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <br />
                <a
                  href="https://www.google.com/maps/place/Teatro+Gran+Rex/@-34.6033873,-58.5313019,12z/data=!4m10!1m2!2m1!1sGran+Rex!3m6!1s0x95bccaceed5746b9:0xf933ab84305babc0!8m2!3d-34.6033873!4d-58.3788666!15sCghHcmFuIFJleJIBF3BlcmZvcm1pbmdfYXJ0c190aGVhdGVy4AEA!16s%2Fm%2F05bzpqm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Compralo desde Teatro Gran Rex <StoreMallDirectoryIcon />
                  </button>
                </a>
              </div>
              <div className={style.comments}>
                {<Comments event={detailEvent} />}
              </div>
              <br></br>
            </div>
          ) : islogin.isAuthenticated ? (
            <UpdateEvents id={id} event={detailEvent} />
          ) : (
            <div></div>
          )}
          <br></br>
          <br></br>
          <br></br>
          {destino.ban === true ? (
            <div className={style.maps}>
              <Maps
                city={detailEvent.Country}
                country={detailEvent.city}
                Dcity={destino.city}
                Dcountry={destino.country}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailsEvents;
