import "./searchBar.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistName } from "../../redux/artistSlice";
import SearchIcon from "@mui/icons-material/Search";
import {  useNavigate, useLocation } from "react-router-dom";


const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (name) {
      if(location.pathname.split("/").pop() !== 'artists'){ 
        //si location no es artist, cambiar a artists y generar busqueda
        await navigate("/artists")
      }
      dispatch(getArtistName(name));
      setName("");
      
    }
  };

  return (
    <div className="searchbar-container">
      <form>
        <input
          className="searchbar"
          type="text"
          onChange={handleOnChange}
          placeholder="¿Qué artista quieres ver hoy?"
        />
        <NavLink to={`/home?name=${name}`}>
          <button className="searchbar-btn" onClick={(e) => handleOnClick(e)}>
            <i className="search-icon">
              <SearchIcon />
            </i>
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default SearchBar;
