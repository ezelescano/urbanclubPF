import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { login } from './authSlice';

const initialState = {
  usuario: [],
  allUsuarios: [],
  artist: [],
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
        allUsuarios: action.payload
      }
    },
    postArtistSuccess(state, action){
      return{
        ...state,
        artist: action.payload
      }
    }
  }
});


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

export const getArtistName  = (name) => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist?name=${name}`);
    const artist = apiData.data;
    return dispatch(getArtistNameSuccess(artist));
  };
};

export const postArtist = (payload) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.post('/artist', payload);
      const result = apiData.data;
      dispatch(postArtistSuccess(result));
      dispatch(login({
        email: result.email,
        password: result.password
      }))
    } catch (error) {
      alert('No se pudo crear el artista')
    }
  };
};



export const {
  getArtistIdSuccess,
  getAllArtsSuccess,
  getArtistNameSuccess,
  postArtistSuccess
} = artistSlice.actions;

export default artistSlice.reducer;