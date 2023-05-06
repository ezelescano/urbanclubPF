import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";

const initialState = {
  creaEvents: [],
  allEvents: [],
  detailEvent:[]
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
        allEvents: action.payload,
      };
    },
    gellDetailEvent(state,action) {
      return {
        ...state,
        detailEvent:action.payload
      }
    }
  },
});

export const postEvent = (payload) => {
    return async (dispatch) => {
        try {
            const eventData = (await axios.post('/events', payload)).data;
           
       
        return dispatch(postEventSuccess(eventData));
      } catch (error) {
        console.log(error);
        swal({
            title: "EVENTOS",
            text:  `No se pudo crear el evento`,
            icon: "error",
            buttons: "Aceptar"
         })
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
  
 return async (dispatch) =>{
  try {
    const result = (await axios.get(`/events/detailEvent/${id}`)).data;
    console.log(result)
    return dispatch(gellDetailEvent(result))
  } catch (error) {
        swal({
            title: "EVENTOS",
            text:  `No hay eventos para este usuario`,
            icon: "error",
            buttons: "Aceptar"
         })
  }
 }
}


export const { postEventSuccess, getAllEventsSuccess,gellDetailEvent } = eventSlice.actions;

export default eventSlice.reducer;
