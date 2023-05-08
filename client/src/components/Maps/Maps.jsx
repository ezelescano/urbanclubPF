import React, { useState, useEffect } from "react";

function Maps({ location }) {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (location) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
          const { lat, lng } = results[0].geometry.location;
          setCoords({ lat: lat(), lng: lng() });
        } else {
          console.log(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }, [location]);

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places,geocode`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener("load", () => {
      if (coords) {
        const mapOptions = {
          center: coords,
          zoom: 18,
          disableDoubleClickZoom: true,
        };
        const mapInstance = new window.google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );
        setMap(mapInstance);
        const marker = new window.google.maps.Marker({
          position: coords,
          map: mapInstance,
        });
      }
    });
    console.log("Se intento buscar:" +  location + "En tu pagina :(");
  }, [coords]);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

export default Maps;
