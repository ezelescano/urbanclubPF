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
        updateEventSuccess(state, action) {
            return {
                ...state,
                creaEvents: action.payload
            }
        }
    }
});

export const upEvent = (id, input) => {
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
                buttons: "Aceptar"
            })
        }
    }
}


export const postEvent = (payload) => {
    return async (dispatch) => {
        try {
            const eventData = (await axios.post('/events', payload)).data;
            return dispatch(postEventSuccess(eventData));
        } catch (error) {
            console.log(error);
            swal({
                title: "EVENTOS",
                text: `No se pudo crear el evento`,
                icon: "error",
                buttons: "Aceptar"
            })
        }
    };
};

export const {
    postEventSuccess,
    updateEventSuccess
} = eventSlice.actions;

export default eventSlice.reducer;