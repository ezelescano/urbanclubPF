import React from "react";
import style from "./HomeArt.module.css";
import TopArt from "../Artists/TopArt";
import { getAllArts } from "../../redux/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const HomeArt = () => {
  const artista = useSelector((state) => state.artist.allUsuarios.slice(0, 5)); // Limitar a los primeros 6 elementos

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArts());
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={style.ConteinerArt}>
      <div className={style.TopArt}>
        {artista.map((item, index) => (
          <div key={index}>
            <TopArt
              id={item.id}
              name={item.name}
              profilePhoto={item.profilePhoto}
              ocupation={item.ocupation}
              aboutMe={item.aboutMe}
            />
          </div>
        ))}
        <NavLink className={style.toArtists}to="/artists" onClick={scrollToTop}>
          <button>Ver más {">"}</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeArt;
