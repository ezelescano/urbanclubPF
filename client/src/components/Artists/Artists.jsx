import React from "react";
import style from "./Artists.module.css";
import CardsArt from "../Cards/CardsArt/CardsArt";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArts } from "../../redux/artistSlice";
import loading from '../../img/loading.gif'

const Artists = () => {
  const artistas = useSelector((state) => state.artist.allUsuarios);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArts());
  }, []);

  return (
    <div className={style.ourPage}>
      <div className={style.container}>
        {artistas.length >0 ? (artistas.map((item) => (
          <div key={item.id} className={style.containerCar}>
            {/*A esté le tenes qué poner key*/}
            <CardsArt
              id={item.id}
              name={item.name}
              profilePhoto={item.profilePhoto}
              ocupation={item.ocupation}
              aboutMe={item.aboutMe}
            />
          </div>
        ))): Array.isArray(artistas) ? /* aca ira la imagen not found creado por estiven*/(
          <div>
            NOT FOUND
          </div>
        ) : (
          <div>
            <img className="loading" src={loading} alt=""></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;
