import React, { useState, useEffect } from "react";

function EventMap({ location }) {
  const [map, setMap] = useState(null);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places`; //Eso te envia Por LATITUD Y LONGITUD OJOOOO, No funciona por el momento los Places
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
    });
  }, [location]);
  function geocodeAddress(address) {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        setPlace(results[0].geometry.location);
      } else {
        console.error(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  }

  return <div id="map" style={{ height: "500px" }}></div>;
}

export default EventMap;
