// import React, { useState, useEffect } from "react";
// function Maps({ location }) {
//   const [map, setMap] = useState(null);

//   const [startLocation, setStartLocation] = useState(null);
//   const [endLocation, setEndLocation] = useState(null);
//   const [directions, setDirections] = useState(null);
//   const [locationError, setLocationError] = useState(false);
//   const [apiLoaded, setApiLoaded] = useState(false);
//   const [searchLocation, setSearchLocation] = useState(null); // nuevo estado para almacenar la dirección de búsqueda original



//   useEffect(() => {
//     if (location) {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({ address: location }, (results, status) => {
//         if (status === "OK") {
//           const { lat, lng } = results[0].geometry.location;
//           setEndLocation({ lat: lat(), lng: lng() });
//         } else {
//           console.log(
//             "Geocode was not successful for the following reason: " + status
//           );
//         }
//       });
//     }
//   }, [location]);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setStartLocation({ lat: latitude, lng: longitude });
//         },
//         (error) => {
//           console.error(error);
//           setLocationError(true); // set locationError state variable to true
//         }
//       );
//     } else {
//       setLocationError(true); // set locationError state variable to true if geolocation is not supported
//     }
//   }, []);

//   useEffect(() => {
//     const googleMapsScript = document.createElement("script");
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places,geocode`;
//     googleMapsScript.async = true;
//     googleMapsScript.defer = true;
//     window.document.body.appendChild(googleMapsScript);

//     googleMapsScript.addEventListener("load", () => {
//       setApiLoaded(true);
//       if (startLocation && endLocation) {
//         const directionsService = new window.google.maps.DirectionsService();
//         directionsService.route(
//           {
//             origin: startLocation,
//             destination: endLocation,
//             travelMode: "DRIVING",
//           },
//           (result, status) => {
//             if (status === "OK") {
//               const mapOptions = {
//                 center: startLocation,
//                 zoom: 18,
//                 disableDoubleClickZoom: true,
//               };
//               const mapInstance = new window.google.maps.Map(
//                 document.getElementById("map"),
//                 mapOptions
//               );
//               setMap(mapInstance);
//               const marker = new window.google.maps.Marker({
//                 position: startLocation,
//                 map: mapInstance,
//               });
//              
//               setDirections(result);
//               const directionsRenderer =
//                 new window.google.maps.DirectionsRenderer({
//                   map: mapInstance,
//                   directions: result,
//                 });
//               console.log(directions);
//             } else {
//               console.log("Directions request failed due to " + status);
//             }
//           }
//         );
//       }
//     });
//   }, [startLocation, endLocation]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       {locationError ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             padding: "20px",
//             boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
//             cursor: "help",
//           }}
//         >
//           <p style={{ marginBottom: "10px" }}>
//             No se pudo proporcionar una ubicación de referencia {":("}
//           </p>
//         </div>
//       ) : (
//         apiLoaded && <div id="map" style={{ width: "100%", height: "100%" }} /> // utilizar apiLoaded en el chequeo condicional
//       )}
//     </div>
//   );
// }
// export default Maps;

 //! *****************************


import React, { useState, useEffect } from "react";
import swal from "sweetalert";
function Maps({ city,country,Dcountry,Dcity }) {
  const [map, setMap] = useState(null);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [locationError, setLocationError] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [searchLocation, setSearchLocation] = useState(null); // nuevo estado para almacenar la dirección de búsqueda original

  
  useEffect(() => {
 
  
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places,geocode`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);
   try {
    googleMapsScript.addEventListener("load", () => {
      setApiLoaded(true);
        const directionsService = new window.google.maps.DirectionsService();
       
        const request = {
          origin: `${city},${country}`,
          destination: `${Dcity},${Dcountry}`,
          travelMode: window.google.maps.TravelMode.DRIVING
        };
        directionsService.route(
          request,
          (result, status) => {
            
            if (status === "OK") {
              const mapOptions = {
                center: `${city},${country}`, //startLocation,
                zoom: 18,
                disableDoubleClickZoom: true,
              };
              const mapInstance = new window.google.maps.Map(
                document.getElementById("map"),
                mapOptions
              );
              setMap(mapInstance);
              const marker = new window.google.maps.Marker({
                position: `${city},${country}`,//startLocation,
                map: mapInstance,
              });
             
              setDirections(result);
              const directionsRenderer =
                new window.google.maps.DirectionsRenderer({
                  map: mapInstance,
                  directions: result,
                });
            
            } else {
              swal({
                title: "INFORMACION INCORRECTA",
                text: "Verifique su pais y ciudad",
                icon: "info",
                buttons: "Aceptar",
              })
            }
          }
        );
      
    });
   } catch (error) {
    console.log("este es error",error)
   }
  }, [startLocation]);

  //! *****************************

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {locationError ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            cursor: "help",
          }}
        >
          <p style={{ marginBottom: "10px" }}>
            No se pudo proporcionar una ubicación de referencia {":("}
          </p>
        </div>
      ) : (
        apiLoaded && <div id="map" style={{ width: "100%", height: "100%" }} /> // utilizar apiLoaded en el chequeo condicional
      )}
    </div>
  );
}
export default Maps;

// import React, { useState, useEffect } from "react";
// function Maps({ location }) {
//   const [map, setMap] = useState(null);
//   console.log(map);
//   const [startLocation, setStartLocation] = useState(null);
//   const [endLocation, setEndLocation] = useState(null);
//   const [directions, setDirections] = useState(null);
//   const [locationError, setLocationError] = useState(false);
//   const [apiLoaded, setApiLoaded] = useState(false);
//   const [searchLocation, setSearchLocation] = useState(null); // nuevo estado para almacenar la dirección de búsqueda original

//   console.log(directions);

//   useEffect(() => {
//     if (location) {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({ address: location }, (results, status) => {
//         if (status === "OK") {
//           const { lat, lng } = results[0].geometry.location;
//           setEndLocation({ lat: lat(), lng: lng() });
//         } else {
//           console.log(
//             "Geocode was not successful for the following reason: " + status
//           );
//         }
//       });
//     }
//   }, [location]);

//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setStartLocation({ lat: latitude, lng: longitude });
//         },
//         (error) => {
//           console.error(error);
//           setLocationError(true); // set locationError state variable to true
//         }
//       );
//     } else {
//       setLocationError(true); // set locationError state variable to true if geolocation is not supported
//     }
//   }, []);

//   useEffect(() => {
//     const googleMapsScript = document.createElement("script");
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY&libraries=places,geocode`;
//     googleMapsScript.async = true;
//     googleMapsScript.defer = true;
//     window.document.body.appendChild(googleMapsScript);

//     googleMapsScript.addEventListener("load", () => {
//       setApiLoaded(true);
//       if (startLocation && endLocation) {
//         const directionsService = new window.google.maps.DirectionsService();
//         directionsService.route(
//           {
//             origin: startLocation,
//             destination: endLocation,
//             travelMode: "DRIVING",
//           },
//           (result, status) => {
//             if (status === "OK") {
//               const mapOptions = {
//                 center: startLocation,
//                 zoom: 18,
//                 disableDoubleClickZoom: true,
//               };
//               const mapInstance = new window.google.maps.Map(
//                 document.getElementById("map"),
//                 mapOptions
//               );
//               setMap(mapInstance);
//               const marker = new window.google.maps.Marker({
//                 position: startLocation,
//                 map: mapInstance,
//               });
//               console.log(marker);
//               setDirections(result);
//               const directionsRenderer =
//                 new window.google.maps.DirectionsRenderer({
//                   map: mapInstance,
//                   directions: result,
//                 });
//               console.log(directions);
//             } else {
//               console.log("Directions request failed due to " + status);
//             }
//           }
//         );
//       }
//     });
//   }, [startLocation, endLocation]);

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       {locationError ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             padding: "20px",
//             boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
//             cursor: "help",
//           }}
//         >
//           <p style={{ marginBottom: "10px" }}>
//             No se pudo proporcionar una ubicación de referencia {":("}
//           </p>
//         </div>
//       ) : (
//         apiLoaded && <div id="map" style={{ width: "100%", height: "100%" }} /> // utilizar apiLoaded en el chequeo condicional
//       )}
//     </div>
//   );
// }
// export default Maps;
 
