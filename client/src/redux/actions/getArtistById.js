import { GET_ARTIST_DETAIL } from "./index";

export const getArtistDetail = (id) => {
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/artist/${id}`);
        const artist = apiData.data;
        dispatch({
          type: GET_ARTIST_DETAIL,
          payload: artist,
        });
      };
}