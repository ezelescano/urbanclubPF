import React from "react";
import style from "./Artists.module.css";
import CardsArt from "../Cards/CardsArt/CardsArt";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllArts,
  FilterArtists,
  cleanArtists,
  getAllCategories,
  getAllLocations,
  pagNum,
  getArtistName,
} from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import Errors404search from "../Error404/Error404search";
import Paginado from "./PagArtists";

const Artists = () => {
  // Estados de redux "artistSlice.js"
  const artistas = useSelector((state) => state.artist.allUsuarios);
  const usuario = useSelector((state) => state.artist.copiArtista);
  const categories = useSelector((state) => state.artist.categories);
  const locations = useSelector((state) => state.artist.locations);

  const [orden, setOrden] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Paginado
  const currentPage = useSelector((state) => state.artist.pag);
  const [artistsPerPage, setArtistsPerPage] = useState(9); // Modificá la cantidad de Items vistos.
  const indexOfLastArtists = currentPage * artistsPerPage; //1
  const indexOfFirstArtists = indexOfLastArtists - artistsPerPage;
  const currentArtists = artistas.slice(
    indexOfFirstArtists,
    indexOfLastArtists
  );
  const dispatch = useDispatch();

  useEffect(() => {
    function asynGetArtists() {
      // You can await here
      setIsLoading(true);

      dispatch(getAllArts());
      dispatch(getAllCategories());
      dispatch(getAllLocations());

      setIsLoading(false);
      // ...
    }

    asynGetArtists();
    //dispatch(cleanArtists);
    return dispatch(cleanArtists);
  }, [dispatch]);

  useEffect(() => {
    if (search.trim() !== "") {
      dispatch(getArtistName(search));
      //dispatch (pagNum(1));
    } else {
      dispatch(getAllArts());
    }
  }, [search]); // eslint-disable-line

  useEffect(() => {
    dispatch(pagNum(1));
    // dispatch(FilterArtists(selectedCategory));
    handlesFilter();
  }, [selectedCategory, selectedLocation, orden]);

  const handlesFilter = async () => {
    let artist = [...usuario];

    const events = orden;

    if (selectedCategory !== "" || selectedLocation !== "" || orden !== "") {
      setIsLoading(true);
      dispatch(FilterArtists(selectedCategory, selectedLocation, orden));
      setIsLoading(false);

      // Add selected filters to the state
      const newFilters = [];
      if (selectedCategory !== "") newFilters.push(selectedCategory);
      if (selectedLocation !== "") newFilters.push(selectedLocation);
      if (orden !== "") newFilters.push(orden);
      setSelectedFilters(newFilters);
    } else {
      setIsLoading(true);
      dispatch(getAllArts(artist));
      setIsLoading(false);

      // Clear selected filters
      setSelectedFilters([]);
    }
  };
  const handleRemoveFilter = (filter) => {
    const newFilters = selectedFilters.filter((f) => f !== filter);
    setSelectedFilters(newFilters);

    // Remove filter from the form
    if (selectedCategory === filter) setSelectedCategory("");
    if (selectedLocation === filter) setSelectedLocation("");
    if (orden === filter) setOrden("");
  };
  return (
    <div className={style.ourPage}>
      <div className={style.container}>
        <br />
        <div className={style.containerFilters}>
          <form className={style.filtersLogic}>
            <input
              style={{ width: "180px" }}
              className={style.selectFilters}
              type="text"
              value={search}
              placeholder="¿Qué artista quieres ver hoy?"
              onChange={(event) => setSearch(event.target.value)}
            />
            <select
              className={style.selectFilters}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas las ocupaciones</option>
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(event) => setSelectedLocation(event.target.value)}
            >
              <option value="">Todos los países</option>
              {locations?.map((Country) => (
                <option key={Country} value={Country}>
                  {Country}
                </option>
              ))}
            </select>
            <select
              value={orden}
              onChange={(event) => setOrden(event.target.value)}
            >
              <option value="">Por Evento</option>
              <option value="true">Tiene Evento</option>
              <option value="false">No tiene Evento</option>
            </select>

            <button
              type="button"
              onClick={() => (
                setSelectedCategory(""),
                setSelectedLocation(""),
                setOrden(""),
                setSearch("")
              )}
            >
              Limpiar
            </button>
          </form>
          {/* <div className={style.selectedFilters}>
            {selectedFilters.map((filter) => (
              <div key={filter} className={style.selectedFilter}>
                <span>{filter}</span>
                <button onClick={() => handleRemoveFilter(filter)}>X</button>
              </div>
            ))}
          </div> */}
        </div>
        <br />
        <Paginado artistsPerPage={artistsPerPage} artistas={artistas.length} />
        <div className={style.containerArtists}>
          {isLoading && (
            <div className="loading-gif">
              <img className="loading" src={loading} alt="" width="50px"></img>
            </div>
          )}
          {!isLoading && currentArtists.length > 0
            ? currentArtists.map((item) => {
                //console.log("HOLAAAAAAA", currentArtists);
                let ocupacion;
                item.ocupation !== undefined
                  ? (ocupacion = item.ocupation)
                  : (ocupacion = "");
                return (
                  <div key={item.id} className={style.containerCar}>
                    <CardsArt
                      id={item.id}
                      name={item.name}
                      profilePhoto={item.profilePhoto}
                      coverPhoto={item.coverPhoto}
                      ocupation={ocupacion}
                      aboutMe={item.aboutMe}
                      Country={item.Country}
                      city={item.city}
                      Events={item.Events}
                    />
                  </div>
                );
              })
            : !isLoading &&
              currentArtists.length === 0 && (
                <Errors404search></Errors404search>
              )}
        </div>
        <br /> <br />
      </div>
    </div>
  );
};

export default Artists;
