import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  usuario: [],
  allUsuarios: [],
  allUsuariosArt: [],
}



export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    getAllArtsSuccess(state, action) {
      return {
        ...state,
        allUsuarios: action.payload
      }
    },
    getArtistIdSuccess(state, action) {
      return {
        ...state,
        usuario: action.payload
      };
    },
    getArtistNameSuccess(state, action){
      return {
        ...state,
      }
    }
  }
});

/* export const getArtistDetail = () => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist`);
    const artists = apiData.data;
    return dispatch({
      type: GET_ALL_ARTISTS,
      payload: artists,
    });
  };
}; */

export const getAllArts = () => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist`);
    const artist = apiData.data;
    return dispatch(getAllArtsSuccess(artist));
  };
};


export const getArtistId = (id) => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist/${id}`);
    const artist = apiData.data;
    return dispatch(getArtistIdSuccess(artist));
  };
};

export const getArtistName = (name) => {
  return async (dispatch) => {
      const apiData = await axios.get(`/artist?name=${name}`);
      const artist = apiData.data;
      return dispatch(getArtistNameSuccess(artist));
    };
};



export const {
  getArtistIdSuccess,
  getArtistNameSuccess
} = artistSlice.actions;

export default artistSlice.reducer;