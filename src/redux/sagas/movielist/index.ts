import {takeEvery, call, put} from 'redux-saga/effects';
import AxiosService from '../../../networks/AxiosService';
import {ApiUrls} from '../../../networks/ApiUrls';
import {getMovieList, movieListSuccess, movieListFailure} from '../../reducer/movielist'
import {movieDetailSuccess, movieDetailFailure, getMovieDetail} from '../../reducer/moviedetail'
import { artistFailure, artistSuccess, getArtist } from '../../reducer/artist';


function* movieListApi(action: any) {
    try {
        console.log('>> List >> ', action);
        const response = yield call(AxiosService.getServiceData, ApiUrls.MOVIE_LIST, action.payload);
        const result = response.data;
        yield put(movieListSuccess(result));
    } catch (error) {
        yield put(movieListFailure());
    }
}

function* movieDetailApi(action: any) {
    try {
        const response = yield call(AxiosService.getServiceData, ApiUrls.MOVIE_DETAIL(action.payload.movieId), {});
        const result = response.data;
        yield put(movieDetailSuccess(result));
    } catch (error) {
        yield put(movieDetailFailure());
    }
}
function* artistApi(action: any) {
    try {
        const response = yield call(AxiosService.getServiceData, ApiUrls.ARTIST(action.payload.movieId), {});
        const result = response.data;
        yield put(artistSuccess(result));
    } catch (error) {
        yield put(artistFailure());
    }
}


const combineSagas = [takeEvery(getMovieList.type, movieListApi), takeEvery(getMovieDetail.type, movieDetailApi), takeEvery(getArtist.type, artistApi)];
export default combineSagas
