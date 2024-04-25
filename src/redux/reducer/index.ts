import {combineReducers} from 'redux';
import movieListReducer from './movielist';
import movieDetailReducer from "./moviedetail";
import artistReducer from "./artist";

export default combineReducers({
    movieListReducer,
    movieDetailReducer,
    artistReducer,
});