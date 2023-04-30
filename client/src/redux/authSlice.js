import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import jwt_decode from "jwt-decode";

//slice de inicio de secion
//para usar el estado 
//const nombredelavariable = useSelector(state => state.auth.elestado que necesiten)
//si van usar una action
//import { nombredelaaction } from '../../redux2/authSlice'
//si no entienden preguntar a Alex plsssss


const initialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  user: localStorage.getItem('user') || {},
  error: null,
};






export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action){
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload;
      state.error = null;
      const artist = jwt_decode(action.payload.token); // Acá te lo decodifica ###
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(artist));
    },

    loginFailure(state, action){
      return {
        ...state,
        error: action.payload,
      };
    },

    logout(state){
        
        state.isAuthenticated = false;
        state.token = null;
        state.user = {};
        state.error = null;
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        }
  }
});

export const login = (payload, navigate) => {
  return async(dispatch) => {
    try {
      const response = await axios.post('/artist/login', payload);
      const data = response.data;
      dispatch(loginSuccess(data));
      alert('login exitoso');
      navigate("/artists")
    } catch (e) {
      dispatch(loginFailure(e))
      alert('Datos Invalidos, Porfavor Revisar')
    }
  }
};


/* export const createandLoginUser = (payload) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.post('/artist', payload);
      const result = apiData.data;
      return dispatch(postArtistSuccess(result));
    } catch (error) {
      alert('No se pudo crear el artista')
    }
  };
}; */


export const {
  loginSuccess,
  loginFailure,
  logout
} = authSlice.actions;

export default authSlice.reducer;


