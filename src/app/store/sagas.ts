import {takeLatest, put} from 'redux-saga/effects';
import {RootActionType, setCurrentBeer, setCurrentBrewery, setLoader} from './actions';
import {Action} from 'redux-actions';
import axios, {AxiosResponse} from 'axios';
import {mapBeer, ServerBeer} from '../models/Beer';
import {Brewery, mapBrewery} from '../models/Brewery';

const baseUrl: string = 'http://api.brewerydb.com/v2/';
const apiKey = process.env.REACT_APP_API_KEY;

interface BeerResponse {
    data: ServerBeer
}

interface BreweryResponse {
    data: Brewery
}

function* getBeer() {
    yield put(setLoader({isLoading: true}));
    try {
        const {data: {data}}: AxiosResponse<BeerResponse> = yield axios.get<BeerResponse>(
            `${baseUrl}beer/random`, {
                params: {
                    withBreweries: 'Y',
                    hasLabels: 'Y',
                    key: apiKey
                }
            }
        );
        yield put(setCurrentBeer({currentBeer: mapBeer(data)}));
    } catch (e) {
        yield console.log(e);
    }
    yield put(setLoader({isLoading: false}));
}

function* getBrewery(action: Action<{ id: string }>) {
    yield put(setLoader({isLoading: true}));
    try {
        const {data: {data}}: AxiosResponse<BreweryResponse> = yield axios.get<BreweryResponse>(
            `${baseUrl}brewery/${action.payload.id}`, {params: {key: apiKey}}
        );
        yield put(setCurrentBrewery({
            currentBrewery: mapBrewery(data)
        }));
    } catch (e) {
        yield console.log(e);
    }
    yield put(setLoader({isLoading: false}));
}

export default function* rootSagas() {
    yield takeLatest(RootActionType.RANDOMIZE_BEER_GET_BEER, getBeer);
    yield takeLatest(RootActionType.BREWERY_DETAIL_GET_BREWERY, getBrewery);
}
