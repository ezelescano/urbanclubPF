import React from "react";
import style from "./Artists.module.css";
import CardsArt from "../Cards/CardsArt/CardsArt";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllArts,
  getFilterArtists,
  FilterArtists,
  cleanArtists,
} from "../../redux/artistSlice";
import loading from "../../img/loading.gif";
import Errors404search from "../Error404/Error404search";

const Artists = () => {
  const artistas = useSelector((state) => state.artist.allUsuarios);
  const usuario = useSelector((state) => state.artist.copiArtista);
  const category = useSelector((state) => state.artist.categoria);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function asynGetArtists() {
      // You can await here
      setIsLoading(true);

      await dispatch(getAllArts());

      setIsLoading(false);
      // ...
    }

    asynGetArtists();
    //dispatch(cleanArtists);
    return dispatch(cleanArtists);
  }, [dispatch]);

  const [ocupation, setOcupation] = useState("");
  const [country, setCountry] = useState("");
  const [orden, setOrden] = useState("");
  //  const [search, setSearch]= useState('')

  useEffect(() => {
    // dispatch(FilterArtists(ocupation));
    handlesFilter();
  }, [ocupation, country, orden]);

  const filterOcupacionForMap = [
    "Bailarin",
    "Cantante",
    "Musico",
    "Actor",
    "Pintor",
    "Modelo",
  ];
  const handlesFilter = async () => {
    let artist = [...usuario];
    const ubicacion = country;
    const events = orden;

    if (ocupation !== "" || country !== "" || orden !== "") {
      setIsLoading(true);
      dispatch(FilterArtists(ocupation, ubicacion, orden));
      setIsLoading(false);

      // Add selected filters to the state
      const newFilters = [];
      if (ocupation !== "") newFilters.push(ocupation);
      if (country !== "") newFilters.push(country);
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
    if (ocupation === filter) setOcupation("");
    if (country === filter) setCountry("");
    if (orden === filter) setOrden("");
  };
  return (
    <div className={style.ourPage}>
      <div className={style.container}>
        <br />
        <div className={style.containerFilters}>
          <form className={style.filtersLogic}>
            <select
              className={style.selectFilters}
              value={ocupation}
              onChange={(event) => setOcupation(event.target.value)}
            >
              <option value="">Todas las ocupaciones</option>
              {filterOcupacionForMap?.map((ocupation) => (
                <option key={ocupation} name="ocupation" value={ocupation}>
                  {ocupation}
                </option>
              ))}
            </select>

            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              <option value="">Todos los países</option>
              <option value="Argentina">Argentina</option>
              <option value="México">México</option>
              <option value="España">España</option>
              <option value="Colombia">Colombia</option>
              <option value="Peru">Peru</option>
              <option value="Chile">Chile</option>
              <option value="Estados Unidos">Estados Unidos</option>
            </select>

            <select
              value={orden}
              onChange={(event) => setOrden(event.target.value)}
            >
              <option value="">Por Nombre</option>
              <option value="true">Tiene Evento</option>
              <option value="false">No tiene Evento</option>
            </select>

            <button
              type="button"
              onClick={() => (setOcupation(""), setCountry(""), setOrden(""))}
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
        <div className={style.containerArtists}>
          {isLoading && (
            <div className="loading-gif">
              <img className="loading" src={loading} alt="" width="50px"></img>
            </div>
          )}
          {!isLoading && artistas.length > 0
            ? artistas.map((item) => {
                
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
              artistas.length === 0 && <Errors404search></Errors404search>}
        </div>
        <br /> <br />
      </div>
    </div>
  );
};

export default Artists;
