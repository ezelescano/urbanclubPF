import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import swal from 'sweetalert'

const initialState = {
    creaEvents: []
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        postEventSuccess(state, action) {
            return {
                ...state,
                creaEvents: action.payload
            }
        },
    }
});


export const postEvent = (payload) => {
    return async (dispatch) => {
        try {
            const eventData = (await axios.post('/event', payload)).data;
           
       
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

export const {
    postEventSuccess,
} = eventSlice.actions;

export default eventSlice.reducer;