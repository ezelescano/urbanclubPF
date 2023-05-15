import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { loginSuccess, logout, loginUpdatePhoto } from './authSlice';
import swal from 'sweetalert'
import { BTX_ACEPTAR, EM_USER_NOT_CR, ICO_ERROR, ICO_SUCCESS, SM_USER_CREATED, TLE_ERROR, TLE_INFORMATION } from '../utils/messages';

const initialState = {
  usuario: [],
  allUsuarios: [],
  artist: {},
  allUsuariosArt: [],
  errorForm: {},
  copiArtista: [],
  categories: [],
  errorId: "",
  locations: [],
  pag: 1,
}



export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    // FilterArtists(state, action) {
    //   return {
    //     ...state,
    //     categoria: action.payload,
    //   }
    // },

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
    },

    getAllCategoriesSuccess(state, action) {
      return {
        ...state,
        categories: action.payload,

      }
    },

    getAllLocationsSuccess(state, action) {
      return {
        ...state,
        locations: action.payload,

      }
    },

    pagNumSuccess(state, action) {
      return {
        ...state,
        pag: action.payload,

      }
    },

  }

});


export const pagNum = (number) => {
  return async (dispatch) => {
    dispatch(pagNumSuccess(number));
  };
};

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/search/`);
      const categories = response.data;
      // console.log(categories);
      return dispatch(getAllCategoriesSuccess(categories));
    } catch (error) {
      console.log(error);
    }
  }
};

export const FilterArtists = (categoria, ubicacion, events) => {
  return async (dispatch) => {
    const apiData = await axios.get(`/search/artists?categoria=${categoria}&ubicacion=${ubicacion}&events=${events}`);//`/search/resultados?categoria=${categoria}`
    const artist = apiData.data.artistas;

    return dispatch(getFilterArtists(artist));
  };
};

export const getAllLocations = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`/search/locations`);
      const location = result.data;
      // console.log(location);
      return dispatch(getAllLocationsSuccess(location));
    } catch (error) {
      console.log(error);
    }
  }
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
      dispatch(getArtistIdSuccess(artist));
      return artist

    } catch (error) {

      if (error.response.data.message)
        return dispatch(getArtistIdError(error.response.data.message));
    }
  };
};

export const cleanArtists = () => {
  // return async (dispatch) => {
  //  return dispatch(cleanArtistsSuccess()); //! PABLO revisar el dispatch
  // };
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
        swal({
          title: TLE_ERROR,
          text: result.error,
          icon: ICO_ERROR,
          buttons: BTX_ACEPTAR
        })
        return dispatch(setErrors(result));
      }

      dispatch(postArtistSuccess());
      dispatch(loginSuccess(result));
      dispatch(clearErrors());
      swal({
        title: TLE_INFORMATION,
        text: SM_USER_CREATED,
        icon: ICO_SUCCESS,
        buttons: BTX_ACEPTAR
      }).then(res => {
        if (res) {
          navigate("/")
        }
      })

    } catch (error) {
      swal({
        title: TLE_ERROR,
        text: EM_USER_NOT_CR,
        icon: ICO_ERROR,
        buttons: BTX_ACEPTAR
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
        title: TLE_ERROR,
        text: "No se pudo borrar el artista",
        icon: ICO_ERROR,
        buttons: BTX_ACEPTAR
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
        title: TLE_ERROR,
        text: "Inicia sesion",
        icon: ICO_ERROR,
        buttons: BTX_ACEPTAR
      })
      //navigate("/artists")
    }
  }
}

export const updateArtist = (id, input) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.put(`/artist/update/${id}`, input);
      const response = apiData.data;
      console.log(response);

      dispatch(loginUpdatePhoto(response.profilePhoto))
      dispatch(updateArtistSuccess(response))
      return response;
    } catch (error) {
      swal({
        title: "ERROR",
        text: error.message,
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



export const {
  pagNumSuccess,
  getAllCategoriesSuccess,
  getAllLocationsSuccess,
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