import { POST_ARTIST, GET_ARTIST_DETAIL, GET_ALL_ARTISTS, GET_ARTIST_BY_NAME } from "../actions";

const initialState = {
  allArtists: [],
  artists: [],
  artistDetail: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        allArtist: action.payload,
      };
    case POST_ARTIST:
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
    case GET_ARTIST_BY_NAME:
      const artists = state.allArtists;
      const filteredArtist = artists.filter((artist) => artist.name === action.payload);
      const filtrado = action.payload === "" ? artists : filteredArtist;
      return {
        ...state,
        artists: filtrado,
      }

    default:
      return state;
  }
}
