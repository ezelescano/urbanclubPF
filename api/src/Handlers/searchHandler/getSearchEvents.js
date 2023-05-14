const { Artist, Event } = require("../../db")
const { Op } = require('sequelize');
const { ACTIVATED } = require("../../constants");

const getEventsController = require("../../Controllers/eventController/getEventsController")


const getSearchEvents = async (req, res) => {
  const date = req.date;
  // const subcategoria = req.subcategoria;
  const price = req.price;
  const location = req.ubicacion;
  console.log(location)

  let filteredEvents = await Event.findAll({
    include: [{
      model: Artist,
      attributes: ['id', 'name']
    }]
  });

  const completeDate = new Date() //? fecha en formato completo 2023-05-14T16:16:24.116Z
  const currentDate = completeDate.toISOString().split('T')[0]; //? solo fecha 2023-05-11
  const currentWeekDay = completeDate.getDay() //? dia de la semana actual 4
  const currentMonthDay = completeDate.getDate() //? dia actual del mes 11
  const endWeekDate = new Date(completeDate.setDate(currentMonthDay + (7 - currentWeekDay))).toISOString().split('T')[0]; //?fecha de termino de semana 2023-05-14
  const endMonthDate = new Date(completeDate.getFullYear(), completeDate.getMonth() + 1, 0).toISOString().split('T')[0]; //? fecha de termino de mes 2023-05-31

  if (date) {
    //? los valores de date seran----> a:hoy b:esta semana c:este mes
    if (date === "Hoy") {
      filteredEvents = filteredEvents.filter(event => event.date === currentDate);
    } else if (date === "Esta semana") {
      filteredEvents = filteredEvents.filter(event => event.date >= currentDate && event.date <= endWeekDate);
    } else if (date === "Este mes") {
      filteredEvents = filteredEvents.filter(event => event.date >= currentDate && event.date <= endMonthDate);
    } else if (date === "Proximos") {
      filteredEvents = filteredEvents.filter(event => event.date > endMonthDate);
    }
  }
  if (price) {
    if (price === "0") {
      filteredEvents = filteredEvents.filter(event => event.price === 0);
    } else if (price === "1-50") {
      filteredEvents = filteredEvents.filter(event => event.price > 0 && event.price <= 50)
    } else if (price === "51-100") {
      filteredEvents = filteredEvents.filter(event => event.price > 50 && event.price <= 100)
    } else if (price === "101 a mas") {
      filteredEvents = filteredEvents.filter(event => event.price > 100);
    }
  }
  if (location) {
    filteredEvents = filteredEvents.filter(event => event.Country === location);
  }
  res.json(filteredEvents);
};

module.exports = {
  getSearchEvents,
}