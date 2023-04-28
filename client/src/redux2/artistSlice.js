import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  usuario: [],
  allUsuarios: [],
  artists: [],
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
    postArtistSuccess(state, action){
      return {
        ...state,
        artists: action.payload,
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
export const postArtist = (payload) => {
  return async function (dispatch) {
    try {
          const result = await axios.post("/artist", payload);
          const dataResult = result.data;
          console.log(result.data);
          // console.log(result)

          return dispatch(postArtistSuccess(dataResult));
    } catch (error) {
      alert(error);
      console.log(error);
    }

    
  };
}

export const {
  getArtistIdSuccess,
  getAllArtsSuccess,
  postArtistSuccess
} = artistSlice.actions;

export default artistSlice.reducer;