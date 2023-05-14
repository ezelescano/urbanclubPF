import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const initialState = {
  creaEvents: [],
  allEvents: [],
  detailEvent: [],
  Event: [],
  buyEvent: []
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    postEventSuccess(state, action) {
      return {
        ...state,
        creaEvents: action.payload,
      };
    },
    getAllEventsSuccess(state, action) {
      return {
        ...state,
        allEvents: action.payload
      };
    },
    gellDetailEvent(state, action) {
      return {
        ...state,
        detailEvent: action.payload
      }
    },
    updateEventSuccess(state, action) {
      return {
        ...state,
        Event: action.payload,
      };
    },
    deleteEventSucces(state) {
      return {
        ...state,
      }
    },
    buyEvent(state, action) {
      return {
        ...state,
        buyEvent: action.payload
      }
    }
  },
  getFilterEventsSuccess(state, action) {
    return {
      ...state,
      allEvents: action.payload,


    }
  },

});


export const FilterEvents = (date, price, ubicacion) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`/search/events?date=${date}&price=${price}&ubicacion=${ubicacion}`);
      const events = apiData.data;
      console.log("APIIIIIDATA", apiData.data);
      return dispatch(getFilterEventsSuccess(events));

    } catch (error) {
      console.log("PINCHE", error);
    }
  };
};

export const upEvent = (input, id) => {
  return async (dispatch) => {
    try {
      const eventDB = await axios.put(`/events/update/${id}`, input);
      const response = eventDB.data;
      dispatch(updateEventSuccess(response));
    } catch (error) {
      swal({
        title: "ERROR",
        text: error,
        icon: "warning",
        buttons: "Aceptar",
      });
    }
  };
};

export const postEvent = (payload) => {
  return async (dispatch) => {
    try {
      const eventData = (await axios.post("/events", payload)).data;
      await dispatch(postEventSuccess(eventData));

    } catch (error) {

      swal({
        title: "EVENTOS",
        text: `No se pudo crear el evento`,
        icon: "error",
        buttons: "Aceptar",
      });
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    const apiData = await axios.get(`/events`);
    const events = apiData.data;
    return dispatch(getAllEventsSuccess(events));
  };
};

export const getDetailEvents = (id) => {

  return async (dispatch) => {
    try {
      const result = (await axios.get(`/events/detailEvent/${id}`)).data;
      return dispatch(gellDetailEvent(result))
    } catch (error) {
      swal({
        title: "EVENTOS",
        text: `No hay eventos para este usuario`,
        icon: "error",
        buttons: "Aceptar"
      })
    }
  }
}

export const deleteEvent = (id) => {

  return async (dispatch) => {
    try {

      const res = await axios.delete(`/events/${id}`);
      //  dispatch(deleteEventSucces());
    } catch (error) {
      swal({
        title: "EVENTOS",
        text: `No se pudo eliminar el evento ${error}`,
        icon: "error",
        buttons: "Aceptar"
      })
    }
  }

}

export const buyTicket = (compra) => {
  console.log("entro")
  return async (dispatch) => {
    try {

      const res = await axios.post(`/ticket/create-payment`, compra);
      return res.data
      // dispatch(buyEvent(res.data));

    } catch (error) {
      swal({
        title: "COMPRA FALLIDA",
        text: `No se pudo comprar el evento`,
        icon: "error",
        buttons: "Aceptar"
      })
    }
  }

}


export const { postEventSuccess, getAllEventsSuccess,
  gellDetailEvent, updateEventSuccess,
  deleteEventSucces, buyEvent } = eventSlice.actions;

export default eventSlice.reducer;