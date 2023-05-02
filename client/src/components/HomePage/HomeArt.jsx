import React from "react";
import style from "./HomeArt.module.css";
import TopArt from "../Artists/TopArt";
import { getAllArts } from "../../redux/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const HomeArt = () => {
  const artista = useSelector((state) => state.artist.allUsuarios);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArts());
  }, []);

  return (
    <div className={style.ConteinerArt}>
      <div className={style.TopArt}>
        {artista.map((item, index) => (
          <div key={index}> {/*A esté le tenes qué poner key*/}
            <TopArt
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

export default HomeArt;
