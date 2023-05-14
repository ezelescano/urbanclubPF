import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistName } from "../../redux/artistSlice";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import "./searchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    buscar: "",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (input.buscar) {
      if (location.pathname.split("/").pop() !== "artists") {
        // si location no es artist, cambiar a artists y generar busqueda
        await navigate("/artists");
      }
      dispatch(getArtistName(input.buscar));
      setInput({
        buscar: "",
      });
    }
  };

  const placeholderText =
    windowWidth <= 1000 ? "   Hey! Búscalo" : "¿Qué artista quieres ver hoy?";

  return (
    <div className="searchbar-container">
      <form className="searchbarForm">
        <div>
          <input
            className="searchbar"
            type="text"
            name="buscar"
            onChange={handleOnChange}
            value={input.buscar}
            placeholder={placeholderText}
            autoComplete="off"
          />
          <NavLink to={`/home?name=${input.buscar}`}>
            <button className="searchbar-btn" onClick={(e) => handleOnClick(e)}>
              <i className="search-icon">
                <SearchIcon />
              </i>
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
