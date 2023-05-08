import React, { useState, useEffect } from "react";

function Maps() {
  const [map, setMap] = useState(null);
  const location = { lat: 40.748817, lng: -73.985428 }; // Ubicación hardcodeada

  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places,geocode`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);

    googleMapsScript.addEventListener("load", () => {
      const mapOptions = {
        center: location,
        zoom: 10,
        disableDoubleClickZoom: true,
      };
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      setMap(mapInstance);
      const marker = new window.google.maps.Marker({
        position: location,
        map: mapInstance,
      });
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "600px" }}></div>;
}

export default Maps;
