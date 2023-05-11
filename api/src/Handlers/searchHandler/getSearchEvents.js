const { Artist, Event } = require("../../db")
const { Op } = require('sequelize');
const { ACTIVATED } = require("../../constants");

const getEventsController = require("../../Controllers/eventController/getEventsController")


const getSearchEvents = async (req, res) => {
  const date = req.date;
  // const subcategoria = req.subcategoria;
  const price = req.ubicacion;
  const location = req.location;



  // Lógica para filtrar artistas basados en categoría, subcategoría y/o ubicación
  let filteredEvents = await getEventsController();

  if (date) {

//? los valores de date seran----> a:hoy b:esta semana c:este mes
    if(date ==="Hoy"){
      console.log((new Date(2023-05-10)).getTime())
      console.log(new Date().setHours(0,0,0,0))


    filteredEvents = await Artist.findAll({
        include:{
          model: Event,
          where: {
            date: '2023-05-10' 
          }},
        attributes: ['id', 'name']
    })


      // const currentDay = new Date()
      // const month = (currentDay.getMonth()+1).toString().padStart(2,"0")
      // const day = currentDay.getDate()
      // const year = currentDay.getFullYear()
      // const fechaActual = `${year}-${month}-${day}`

      //   filteredEvents = filteredEvents.map(event => {
          
      //      resultados = (event.Events.map(events=>{
      //       if(events.date===fechaActual){
      //         console.log("vamos bien")
      //         results = 
      //           {
      //             idArtist: events.id,
      //             nameArtist: events.name
      //           }
      //       }
      //     }))
      //     return {
      //       id : event.id,
      //       name : event.name,
      //       resultados: resultados
      //     }
      //   });


      
        // filteredEvents = filteredEvents.filter(oneEvent => (new Date(oneEvent.date)).getTime()===Date.now());

        // filteredEvents = filteredEvents.filter(event => event.Events.filter(oneEvent => (new Date(oneEvent.date)).getTime()===Date.now()));
        // filteredEvents = filteredEvents.map(event => event.Events.filter(oneEvent => console.log("Holish", (new Date(oneEvent.date)).setHours(0,0,0,0))));
        // filteredEvents = filteredEvents.filter(event=>event.length>0)


    } else if (date === "Esta Semana") {
        filteredEvents = filteredEvents.filter(event => event.Events.filter(oneEvent => (new Date(oneEvent.date)).getTime()>Date.now()));
    }
  }

  // if (subcategoria) {
  //   artistasFiltrados = artistasFiltrados.filter(producto => producto.subcategoria === subcategoria);
  // }

  // if (ubicacion) {
  //   artistasFiltrados = artistasFiltrados.filter(artista => artista.Country === ubicacion);
  // }

  // if (events) {
  //   if (events === "true") {
  //     artistasFiltrados = artistasFiltrados.filter(artista => artista.Events.length > 0);
  //   } else if (events === "false") {
  //     artistasFiltrados = artistasFiltrados.filter(artista => artista.Events.length === 0);
  //   }
  // }

  res.json({ ...filteredEvents });
};

module.exports = {
  getSearchEvents,
}