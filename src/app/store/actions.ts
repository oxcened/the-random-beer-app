import {RootState} from './reducer';
import {Action} from 'redux-actions';

export enum RootActionType {
    RANDOMIZE_BEER_GET_BEER = 'RANDOMIZE_BEER_GET_BEER',
    BREWERY_DETAIL_GET_BREWERY = 'BREWERY_DETAIL_GET_BREWERY',

    RANDOMIZE_BEER_SET_CURRENT_BEER = 'RANDOMIZE_BEER_SET_CURRENT_BEER',
    BREWERY_DETAIL_SET_CURRENT_BREWERY = 'BREWERY_DETAIL_SET_CURRENT_BREWERY',
    BREWERY_DETAIL_CLEAN_COMPONENT = 'BREWERY_DETAIL_CLEAN_COMPONENT',
    LOADER_SET_LOADER = 'LOADER_SET_LOADER'
}

export const getBeer = () => ({
    type: RootActionType.RANDOMIZE_BEER_GET_BEER
});

export const getBrewery = (data: { id: string }): Action<{id: string}> => ({
    type: RootActionType.BREWERY_DETAIL_GET_BREWERY,
    payload: data
});

export const setCurrentBeer = (data: Pick<RootState, 'currentBeer'>): Action<Pick<RootState, 'currentBeer'>> => ({
    type: RootActionType.RANDOMIZE_BEER_SET_CURRENT_BEER,
    payload: data
});

export const setCurrentBrewery = (data: Pick<RootState, 'currentBrewery'>): Action<Pick<RootState, 'currentBrewery'>> => ({
    type: RootActionType.BREWERY_DETAIL_SET_CURRENT_BREWERY,
    payload: data
});

export const cleanBreweryDetail = () => ({
    type: RootActionType.BREWERY_DETAIL_CLEAN_COMPONENT
});

export const setLoader = (data: Pick<RootState, 'isLoading'>): Action<Pick<RootState, 'isLoading'>> => ({
    type: RootActionType.LOADER_SET_LOADER,
    payload: data
});
