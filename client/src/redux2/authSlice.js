import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

//slice de inicio de secion
//para usar el estado 
//const nombredelavariable = useSelector(state => state.auth.elestado que necesiten)
//si van usar una action
//import { nombredelaaction } from '../../redux2/authSlice'
//si no entienden preguntar a Alex plsssss


const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action){
      return { 
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload
      }
    },

    loginFailure(state, action){
      return {
        ...state,
        error: action.payload,
      };
    },

    logout(state){
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        user: {},
        error: null,
      };
    }
  }
});

export const login = (payload) => {
  return async(dispatch) => {
    try {
      const response = await axios.post('/artist/login', payload);
      const data = response.data;
      dispatch(loginSuccess(data))
    } catch (e) {
      alert()
      dispatch(loginFailure(e))
    }
  }
};

export const createandLoginUser = (payload) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.post('/artist', payload);
      const result = apiData.data;
      return dispatch(postArtistSuccess(result));
    } catch (error) {
      alert('No se pudo crear el artista')
    }
  };
};


export const {
  loginSuccess,
  loginFailure,
  logout
} = authSlice.actions;

export default authSlice.reducer;


