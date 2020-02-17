import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer, RootState} from './reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

export function configureStore(initialState?: RootState): Store<RootState> {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware))) as Store<RootState>;

    sagaMiddleware.run(sagas);

    return store;
}
