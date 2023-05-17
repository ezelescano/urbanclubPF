import React, { useEffect, useState } from "react";
import style from "./HomeArt.module.css";
import TopArt from "../Artists/TopArt";
import { getAllArts } from "../../redux/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";

const HomeArt = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const artista = useSelector((state) => state.artist.allUsuarios.slice(0, 6)); // Limitar a los primeros 5 elementos
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllArts());

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const getDisplayedItems = () => {
    if (windowWidth >= 1650) {
      return 6;
    } else if (windowWidth >= 1150) {
      return 5;
    } else if (windowWidth >= 970) {
      return 4;
    } else if (windowWidth >= 600) {
      return 3;
    } else {
      return 2;
    }
  };

  const hideCards = artista.length > getDisplayedItems();
  const sortedArtists = [...artista].sort((a, b) => b.id - a.id);


  return (
    <div className={style.ConteinerArt}>
      <div className={style.TopArt}>
        {sortedArtists.slice(0, getDisplayedItems()).map((item, index) => (
          <div
            key={index}
            style={{
              display:
                hideCards && index === getDisplayedItems() - 1
                  ? "none"
                  : "block",
            }}
          >
            <TopArt
              id={item.id}
              name={item.name}
              profilePhoto={item.profilePhoto}
              ocupation={item.ocupation}
              aboutMe={item.aboutMe}
            />
          </div>
        ))}

        <NavLink
          className={style.toArtists}
          to="/artists"
          onClick={scrollToTop}
        >
          <button>
            <GroupsIcon />
          </button>
          <span>
            + Artistas
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeArt;
