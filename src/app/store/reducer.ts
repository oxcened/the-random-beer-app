import {Beer} from '../models/Beer';
import {Brewery} from '../models/Brewery';
import {Action, handleActions} from 'redux-actions';
import {RootActionType} from './actions';

export interface RootState {
    currentBeer: Beer
    currentBrewery: Brewery
    isLoading: boolean
}

const initialState: RootState = {
    currentBeer: null,
    currentBrewery: null,
    isLoading: false
};

const setCurrentBeer = (state: RootState, action: Action<Pick<RootState, 'currentBeer'>>) => ({
    ...state,
    currentBeer: action.payload.currentBeer
});

const setCurrentBrewery = (state: RootState, action: Action<Pick<RootState, 'currentBrewery'>>) => ({
    ...state,
    currentBrewery: action.payload.currentBrewery
});

const cleanBreweryDetail = (state: RootState, action) => ({
    ...state,
    currentBrewery: null
});

const setLoader = (state: RootState, action: Action<Pick<RootState, 'isLoading'>>) => ({
    ...state,
    isLoading: action.payload.isLoading
});

export const rootReducer = handleActions<RootState, RootState>(
    {
        [RootActionType.RANDOMIZE_BEER_SET_CURRENT_BEER]: setCurrentBeer,
        [RootActionType.BREWERY_DETAIL_SET_CURRENT_BREWERY]: setCurrentBrewery,
        [RootActionType.BREWERY_DETAIL_CLEAN_COMPONENT]: cleanBreweryDetail,
        [RootActionType.LOADER_SET_LOADER]: setLoader
    },
    initialState
);
