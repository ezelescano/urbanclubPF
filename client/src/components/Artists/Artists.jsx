import React from "react";
import style from "./Artists.module.css";
import CardsArt from "../Cards/CardsArt/CardsArt";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArts } from "../../redux/artistSlice";

const Artists = () => {
  const artistas = useSelector((state) => state.artist.allUsuarios);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArts());
  }, []);

  return (
    <div className={style.ourPage}>
      <div className={style.container}>
        {artistas.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

export default Artists;
