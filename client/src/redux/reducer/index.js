import { GET_ARTISTS } from "../actions";

const initialState = {
  artists: [],
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
    default:
      return state;
  }
}
