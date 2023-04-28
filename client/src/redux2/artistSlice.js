import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  usuario: [],
  allUsuarios: []
}



export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    getArtistIdSuccess(state, action){
      return {
        ...state,
        usuario: action.payload
      };
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


export const getArtistId = (id) => {
  return async (dispatch) => {
      const apiData = await axios.get(`/artist/${id}`);
      const artist = apiData.data;
      return dispatch(getArtistIdSuccess(artist));
    };
};


export const {
  getArtistIdSuccess
} = artistSlice.actions;

export default artistSlice.reducer;