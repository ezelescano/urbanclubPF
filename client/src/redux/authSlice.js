import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import swal from 'sweetalert'
//slice de inicio de secion
//para usar el estado 
//const nombredelavariable = useSelector(state => state.auth.elestado que necesiten)
//si van usar una action
//import { nombredelaaction } from '../../redux2/authSlice'
//si no entienden preguntar a Alex plsssss


const initialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  user: {},
  error: null,
};






export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      console.log(action)
      const artist = jwt_decode(action.payload.token); // Acá te lo decodifica ###
      localStorage.setItem("token", action.payload.token);
      //localStorage.setItem("user", JSON.stringify(artist));
      state.isAuthenticated = true;
      state.token = action.payload.token;
      //state.user = action.payload;
      state.user = artist;
      state.error = null;
    },

    loginFailure(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },

    logout(state) {
      localStorage.removeItem('token');
      //localStorage.removeItem('user');
      state.isAuthenticated = false;
      state.token = null;
      state.user = {};
      state.error = null;
    },

    loginUpdatePhoto(state,action) {
      // state.user.profilePhoto = action.payload;
      return { ...state, user :{
              id: state.user.id,
              name: state.user.name,
              profilePhoto: action.payload,
              iat: state.user.iat,
              exp: state.user.exp
      }}
      // return {
      //   ...state,
      //   user: action.payload
      // };
    }
  }
});

export const login = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/artist/login', payload);
      const data = response.data;
      dispatch(loginSuccess(data));
      swal({
        title: "Inicio de sesión exitoso",
        text: `Bienvenido`,
        icon: "success",
        buttons: "Aceptar"
      }).then(res => {
        if (res) {
          navigate("/artists")
        }
      })


    } catch (e) {
      dispatch(loginFailure(e))
      swal({
        title: "DATOS INVÁLIDOS",
        text: `Datos Inválidos, Por favor Revisar`,
        icon: "error",
        buttons: "Aceptar"
      })
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
  logout,
  loginUpdatePhoto
} = authSlice.actions;

export default authSlice.reducer;


