import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { loginSuccess, logout } from './authSlice';

const initialState = {
  usuario: [],
  allUsuarios: [],
  artist: {},
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
    getauthSuccess(state, action){
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
    postArtistSuccess(state){
      return{
        ...state,
      }
    },
    // Acá también agregó ALAN
    deleteArtistSuccess(state, action){
      return{
        ...state,
        artist: action.payload
      }
    },
    clearProfile(state){
      return{
        ...state,
        usuario: {}
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
      dispatch(postArtistSuccess());
      dispatch(loginSuccess(result))
    } catch (error) {
      alert('No se pudo crear el artista')
    }
  };
};


// Esto agregó ALAN
export const deleteArtist = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.delete(`/artist/${id}`);
      const result = apiData.data;
      dispatch(deleteArtistSuccess(result));
      dispatch(logout());
      
    } catch (error) {
      alert("No se pudo borrar el artista");
    }
  }
};

export const getauth = (navigate) => {
  return async(dispatch) => {
  try {
    const apiData = await axios.get(`/artist/login/me`);
    const artist = apiData.data;
    return dispatch(getauthSuccess(artist));
  } catch (e) {
    alert('inicia sesion')
    //navigate("/artists")
  }
 }}

export const {
  getArtistIdSuccess,
  getAllArtsSuccess,
  getArtistNameSuccess,
  postArtistSuccess,
  deleteArtistSuccess,
  getauthSuccess,
  clearProfile
} = artistSlice.actions;

export default artistSlice.reducer;