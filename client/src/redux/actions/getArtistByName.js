import { GET_ARTIST_BY_NAME } from "./index";
import axios from "axios";

export const getArtistByName = (name) => {
  return async (dispatch) => {
    const apiData = await axios.get(`http://localhost:3008/artist?name=${name}`);
    const artist = apiData.data;
    dispatch({
      type: GET_ARTIST_BY_NAME,
      payload: artist,
    });
  };
};