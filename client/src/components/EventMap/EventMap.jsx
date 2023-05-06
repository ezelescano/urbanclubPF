import React, { useState, useEffect } from "react";
import style from "./EventMap.module.css";
function EventMap({ location }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places,geocode`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener("load", () => {
      const mapOptions = {
        center: location,
        zoom: 12,
      };
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      setMap(mapInstance);
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
          const location = results[0].geometry.location;
          mapInstance.setCenter(location);
          //Esto es solo el marcador, para el "mapInstance"
          const marker = new window.google.maps.Marker({
            position: location,
            map: mapInstance,
            title: "Nombre Del Lugar de CrearEvento",
          });
          console.log(marker);
          console.log(map);
        } else {
          console.error(
            "Geocode no pudo encontrar el lugar por lo siguiente:",
            status
          );
        }
      });
    });
  }, [location]);
  //El map originalmente no venia acá... Pero al quitarlo no rompe nada. Es más capaz es mejor.

  return <div id="map" className={style.mapSize}></div>;
}

export default EventMap;
