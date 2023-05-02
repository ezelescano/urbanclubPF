import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


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
            console.log("//// soy el eventData", eventData);
       
        return dispatch(postEventSuccess(eventData));
      } catch (error) {
        alert("No se pudo crear el evento")
      }  
    };
};

export const {
    postEventSuccess,
} = eventSlice.actions;

export default eventSlice.reducer;