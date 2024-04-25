import {Constants} from "../appconstants/AppConstants";

const BASE_URL = 'https://api.themoviedb.org/3/';
const MOVIE_LIST = `movie/now_playing?api_key=${Constants.API_KEY}&language=en-US`;
const ARTIST = (movieId: number) => `movie/${movieId}/credits?api_key=${Constants.API_KEY}&language=en-US`
const MOVIE_DETAIL = (movieId: number) => `movie/${movieId}?api_key=${Constants.API_KEY}&language=en-US`
export const ApiUrls = {
    BASE_URL,
    MOVIE_LIST,
    MOVIE_DETAIL,
    ARTIST
};
