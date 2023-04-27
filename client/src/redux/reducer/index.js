import { GET_ARTISTS, GET_ARTIST_DETAIL } from "../actions";

const initialState = {
  artists: [],
  artistDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTISTS:
      if (action.payload) {
        return {
          ...state,
          artists: action.payload,
        };
      } else {
        return {
          ...state,
          artists: [],
        };
      }
    case GET_ARTIST_DETAIL:
      return {
        ...state,
        artistDetail: action.payload,
      };
    default:
      return state;
  }
}
