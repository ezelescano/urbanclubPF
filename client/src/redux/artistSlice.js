import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { loginSuccess, logout } from './authSlice';
import swal from 'sweetalert'
import { EM_NO_USER_ID } from '../utils/messages';

const initialState = {
  usuario: [],
  allUsuarios: [],
  artist: {},
  allUsuariosArt: [],
  errorForm: {},
  copiArtista: [],
  errorId:{}
}



export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    getFilterArtists(state, action) {
      return {
        ...state,
        allUsuarios: action.payload,
      }
    },
    getAllArtsSuccess(state, action) {
      return {
        ...state,
        allUsuarios: action.payload,
        copiArtista: action.payload
      }
    },
    getArtistIdSuccess(state, action) {
      return {
        ...state,
        usuario: action.payload
      };
    },
    getArtistIdError(state, action) {
      return {
        ...state,
        errorId: action.payload
      };
    },
    getauthSuccess(state, action) {
      return {
        ...state,
        usuario: action.payload
      };
    },
    getArtistNameSuccess(state, action) {
      return {
        ...state,
        allUsuarios: action.payload
      }
    },
    cleanArtistsSuccess(state, action) {
      return {
        ...state,
        allUsuarios: []
      }
    },
    postArtistSuccess(state) {
      return {
        ...state,
      }
    },
    setErrors(state, action) {
      return {
        ...state,
        errorForm: action.payload
      }
    },
    clearErrors(state) {
      return {
        ...state,
        errorForm: {}
      }
    },
    // Acá también agregó ALAN
    deleteArtistSuccess(state, action) {
      return {
        ...state,
        artist: action.payload
      }
    },
    clearProfile(state) {
      return {
        ...state,
        usuario: {}
      }
    },
    updateArtistSuccess(state, action) {
      return {
        ...state,
        usuario: action.payload
      }
    }

  }

});

export const FilterArtists = (ocupation, Country) => {
  return async (dispatch) => {
    const apiData = await axios.get('/artist', ocupation, Country);
    const artist = apiData.data;
    return dispatch(getFilterArtists(artist));
  };
};


export const getAllArts = () => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist`);
    const artist = apiData.data;
    return dispatch(getAllArtsSuccess(artist));
  };
};


export const getArtistId = (id) => {
  return async (dispatch) => {
  try {
    const apiData = await axios.get(`/artist/${id}`);
    const artist = apiData.data;
    console.log(artist);
    return dispatch(getArtistIdSuccess(artist));
    
  } catch (error) {
    console.log(error,error.name,error.response.data.message);
    if(error.response.data.message)
      return dispatch(getArtistIdError(error.response.data.message));
  }
  };
};

export const cleanArtists = () => {
  return async (dispatch) => {
    return dispatch(cleanArtistsSuccess());
  };
};

export const getArtistName = (name) => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist?name=${name}`);
    const artist = apiData.data;
    return dispatch(getArtistNameSuccess(artist));
  };
};

export const ErrorsCreate = (payload) => {

  return async (dispatch) => {
    try {
      const apiData = await axios.post('/artist', payload);
      const result = apiData.data;
      if (result.error) {
        dispatch(setErrors(result))
        return
      }
    } catch (error) {

    }
  }
}

export const postArtist = (payload, navigate) => {

  return async (dispatch) => {
    try {
      const apiData = await axios.post('/artist', payload);
      const result = apiData.data;
      if (result.error) {
        return dispatch(setErrors(result))

      }
      dispatch(postArtistSuccess());
      dispatch(loginSuccess(result))
      dispatch(clearErrors())
      swal({
        title: "Usuario Creado",
        text: "Usuario Creado con exito",
        icon: "success",
        buttons: "Aceptar"
      }).then(res => {
        if (res) {
          // navigate("/")
        }
      })

    } catch (error) {
      swal({
        title: "ERROR",
        text: "No se pudo crear el usuario",
        icon: "error",
        buttons: "Aceptar"
      })
    }
  };
};


// Esto agregó ALAN
export const deleteArtist = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.delete(`/artist/${id}`);
      const result = apiData.data;
      return dispatch(deleteArtistSuccess(result));
    } catch (error) {
      swal({
        title: "ERROR",
        text: "No se pudo borrar el artista",
        icon: "error",
        buttons: "Aceptar"
      })
    }
  }
};

export const getauth = (navigate) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`/artist/login/me`);
      const artist = apiData.data;
      return dispatch(getauthSuccess(artist));
    } catch (e) {
      swal({
        title: "ERROR",
        text: "Inicia seccion",
        icon: "warning",
        buttons: "Aceptar"
      })
      //navigate("/artists")
    }
  }
}

export const updateArtist = (id, input) => {
  return async (dispatch) => {
    try {
      console.log(input)
      const apiData = await axios.put(`/artist/update/${id}`, input);
      const response = apiData.data;
      dispatch(updateArtistSuccess(response));
      console.log(response)
    } catch (error) {
      swal({
        title: "ERROR",
        text: error,
        icon: "warning",
        buttons: "Aceptar"
      })
      // console.log();
    }
  }
}

 export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.put("/forgotPassword", email)
      const response = apiData.data;
      console.log(response);
    } catch(error){
      swal({
        title: "ERROR",
        text: error,
        icon: "warning",
        buttons: "Aceptar"
     })
    }
  }
 }



export const {
  getFilterArtists,
  getArtistIdSuccess,
  getArtistIdError,
  getAllArtsSuccess,
  getArtistNameSuccess,
  cleanArtistsSuccess,
  postArtistSuccess,
  deleteArtistSuccess,
  getauthSuccess,
  clearProfile,
  updateArtistSuccess,
  setErrors,
  clearErrors
} = artistSlice.actions;

export default artistSlice.reducer;