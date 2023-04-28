import { GET_ALL_ARTISTS } from "./index";
import axios from "axios";

export const getArtistDetail = () => {
  return async (dispatch) => {
    const apiData = await axios.get(`/artist`);
    const artists = apiData.data;
    dispatch({
      type: GET_ALL_ARTISTS,
      payload: artists,
    });
  };
};
