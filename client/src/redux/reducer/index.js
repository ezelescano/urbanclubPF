import { POST_ARTIST } from "../actions";

const initialState = {
  artists: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
