import "./searchBar.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistName } from "../../redux/artistSlice";
import SearchIcon from "@mui/icons-material/Search";
import {  useNavigate, useLocation } from "react-router-dom";


const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    buscar: ''
})

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value
    });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    if (input.buscar) {
      if(location.pathname.split("/").pop() !== 'artists'){ 
        //si location no es artist, cambiar a artists y generar busqueda
        await navigate("/artists")
      }
      dispatch(getArtistName(input.buscar));
      setInput({
        buscar:''
      });
      
    }
  };

  return (
    <div className="searchbar-container">
      <form>
        <input
          className="searchbar"
          type="text"
          name="buscar"
          onChange={handleOnChange}
          value={input.buscar}
          placeholder="¿Qué artista quieres ver hoy?"
          autoComplete="off"
        />
        <NavLink to={`/home?name=${input.buscar}`}>
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
