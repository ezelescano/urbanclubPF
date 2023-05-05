import React from "react";
import style from "./Artists.module.css";
import CardsArt from "../Cards/CardsArt/CardsArt";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArts, getFilterArtists, getArtistNameSuccess } from "../../redux/artistSlice";
import loading from '../../img/loading.gif'

const Artists = () => {
  const artistas = useSelector((state) => state.artist.allUsuarios);
  const usuario = useSelector((state) => state.artist.copiArtista);

  const dispatch = useDispatch();
   

   useEffect(() => {
     dispatch(getAllArts());
   }, [dispatch]);

   const [ocupation, setOcupation] = useState('')
   const [country, setCountry] = useState('')
   const [orden, setOrden]= useState('')
  //  const [search, setSearch]= useState('')

 
   useEffect(() => {
    handlesFilter();
  },[ocupation, country,orden])

   const filterusuarioForMap = ["Bailarin",
   "Cantante",
   "Musico",
   "Actor",
   "Pintor",
   "Modelo",]
   const handlesFilter = () => {
    let artist = [...usuario];
    if(ocupation !== '' || country !== '' || orden !== '') {
    if(ocupation !== '') artist = artist.filter(artist => artist.ocupation && artist.ocupation.includes(ocupation))
    if(country !== '') artist = artist.filter(artist => artist.Country === country)
    if(orden === 'ascending') artist = artist.sort((a,z) => a.name.localeCompare(z.name))
  if(orden === 'descending') artist = artist.sort((a,z) => z.name.localeCompare(a.name))
    dispatch(getFilterArtists(artist))
  }else {
  dispatch(getAllArts(artist))
  }

}


  return (
    <div className={style.ourPage}>
      <div className={style.container}>

      <form>
      <select value={ocupation}
            onChange={event => setOcupation(event.target.value)}>
          <option value="">Todas las ocupaciones</option>
          {filterusuarioForMap?.map(ocupation =><option key={ocupation} name="ocupation" value={ocupation}>{ocupation}</option>)}
          
        </select>
      




        <select value={country}
            onChange={event => setCountry(event.target.value)}>
          <option value="">Todos los países</option>
          <option value="Argentina">Argentina</option>
          <option value="México">México</option>
          <option value="España">España</option>
          <option value="Estados Unidos">Estados Unidos</option>
        </select>

        <select
            value={orden}
            onChange={event => setOrden(event.target.value)}> 
                <option value="">Nombre</option>
                <option value="ascending">a</option>
                <option value="descending">z</option>

            </select>
            
        <button 
            type="button"
            onClick={() => (setOcupation(''),setCountry(''),setOrden(''))}
            >Limpiar</button>
            </form>
            
            {artistas.length > 0 ? (
          artistas.map((item) => {
          let ocupacion
          item.ocupation !== undefined ? ocupacion = item.ocupation : ocupacion = ''
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
                />
              </div>
            );
          })
        ) : Array.isArray(artistas) ? (
          <div>NOT FOUND</div>
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
