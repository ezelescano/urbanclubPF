import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailEvents } from "../../../redux/eventSlice";
import { useParams } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import style from "./DetailsEvents.module.css";
function DetailsEvents() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detailEvent } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getDetailEvents(id));
  }, [dispatch, id]);
  return (
    <div className={style.container}>
      <div className={style.img_Es}>
        <img src={detailEvent.eventPhoto} alt="" />
      </div>
      <div className={style.Description}>
        <h1>DETALLE DEL EVENTO</h1>
        <h1 style={{ color: "#464646" }}>{detailEvent.name}</h1>
        <h2>NOMBRE DEL LUGAR</h2>
        <h3>{detailEvent.nameArena}</h3>
        <h2>DIRECCION</h2>
        <h3>{detailEvent.location}</h3>
        <h2>PRECIO</h2>
        <h3> U$S {detailEvent.price}</h3>

        {/* <p>{detailEvent.Description}</p> //!necesitamos una descripcion  */}

        <div className={style.links}>
          Comprar Entrada con Debito o Crédito:
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
    </div>
  );
}

export default DetailsEvents;
